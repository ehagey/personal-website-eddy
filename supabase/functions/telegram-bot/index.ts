// Telegram bot that answers questions about site traffic by querying page_views.
// Message the bot from your phone (/today, /week, /ips, /recent), or just ask anything
// in plain English (e.g. "how many visitors from Canada last week?") and it'll turn
// your question into a safe read-only SQL query, run it, and reply in plain English.
// Set up as a Telegram webhook pointing at this function.
//
// Required secrets (Supabase dashboard -> Edge Functions -> Manage secrets):
//   TELEGRAM_BOT_TOKEN        - from @BotFather when you create the bot
//   TELEGRAM_ALLOWED_CHAT_ID  - your own Telegram chat id (see setup notes); if unset,
//                               the bot will reply to anyone who messages it
//   TELEGRAM_WEBHOOK_SECRET   - any random string you make up; must match the
//                               secret_token used when registering the webhook
//   OPENROUTER_API_KEY        - for the free-text "ask anything" capability (via OpenRouter)
import { createClient } from "jsr:@supabase/supabase-js@2";

const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const ALLOWED_CHAT_ID = Deno.env.get("TELEGRAM_ALLOWED_CHAT_ID");
const WEBHOOK_SECRET = Deno.env.get("TELEGRAM_WEBHOOK_SECRET");
const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
const OPENROUTER_MODEL = "openai/gpt-5.6-luna";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const SCHEMA_DESCRIPTION = `
Table public.page_views (one row per page visit):
  viewed_at    timestamptz  -- when the visit happened
  path         text         -- which page, e.g. /blog/on-mental-models
  ip           text         -- visitor's IP address
  user_agent   text         -- browser/device string
  country      text
  region       text         -- state/province
  city         text
  latitude     double precision
  longitude    double precision
  visitor_id   text         -- random per-browser id, survives IP changes

View public.daily_unique_visitors: day, total_page_views, unique_ips, unique_visitor_ids
View public.ip_repeat_counts: ip, visit_count, days_active, first_seen, last_seen, city, region, country
View public.recent_visits: viewed_at, ip, path, city, region, country, visitor_id
`.trim();

async function callLLM(system: string, user: string): Promise<string> {
  // OpenRouter's Anthropic-compatible /v1/messages endpoint: same request/response
  // shape as Anthropic's Messages API, routed to whatever model we ask for.
  const res = await fetch("https://openrouter.ai/api/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENROUTER_API_KEY!}`,
      "HTTP-Referer": "https://eddyhageyoussef.com",
      "X-Title": "Eddy's site analytics bot",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      max_tokens: 1024,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) {
    throw new Error(`OpenRouter API error: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.content?.[0]?.text?.trim() ?? "";
}

function extractSql(raw: string): string {
  // Strip markdown code fences if Claude adds them despite instructions.
  const fenced = raw.match(/```(?:sql)?\s*([\s\S]*?)```/i);
  let sql = (fenced ? fenced[1] : raw).trim();
  sql = sql.replace(/;+\s*$/, ""); // one statement only
  return sql;
}

function isSafeSelect(sql: string): boolean {
  if (!/^select\b/i.test(sql.trim())) return false;
  if (/\b(insert|update|delete|drop|alter|truncate|grant|revoke|create)\b/i.test(sql)) return false;
  if (sql.includes(";")) return false; // no stacked statements
  return true;
}

async function answerFreeformQuestion(question: string): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    return "Free-text questions aren't set up yet — add an OPENROUTER_API_KEY secret to enable this.";
  }

  const sqlRaw = await callLLM(
    `You write a single read-only PostgreSQL SELECT query to answer the user's question about website traffic data.

${SCHEMA_DESCRIPTION}

Rules:
- Output ONLY the SQL query, nothing else. No explanation, no markdown fences.
- SELECT statements only. Never write/modify data.
- Always include a LIMIT (50 by default) unless the query is a single aggregate (COUNT, SUM, etc).
- Dates/times are UTC.`,
    question,
  );

  const sql = extractSql(sqlRaw);
  if (!isSafeSelect(sql)) {
    return "I couldn't turn that into a safe query — try rephrasing it.";
  }

  const { data, error } = await supabase.rpc("run_readonly_query", { query: sql });
  if (error) {
    return `That query didn't run: ${error.message}`;
  }

  const summary = await callLLM(
    "You answer the user's original question in 1-4 short sentences, based only on the JSON query results given. Be direct and concrete with numbers. If the results are empty, say so plainly. Plain text only, no markdown.",
    `Question: ${question}\n\nQuery results (JSON): ${JSON.stringify(data).slice(0, 4000)}`,
  );

  return summary || "No answer came back — try rephrasing the question.";
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

async function handleCommand(text: string): Promise<string> {
  const command = text.trim().toLowerCase();

  if (command === "/today") {
    const { data, error } = await supabase
      .from("daily_unique_visitors")
      .select("*")
      .eq("day", new Date().toISOString().slice(0, 10))
      .maybeSingle();
    if (error) throw error;
    if (!data) return "No visits yet today.";
    return `*Today*\nPage views: ${data.total_page_views}\nUnique IPs: ${data.unique_ips}\nUnique visitors: ${data.unique_visitor_ids}`;
  }

  if (command === "/week") {
    const { data, error } = await supabase
      .from("daily_unique_visitors")
      .select("*")
      .order("day", { ascending: false })
      .limit(7);
    if (error) throw error;
    if (!data?.length) return "No data yet.";
    return (
      "*Last 7 days*\n" +
      data
        .map((d) => `${fmtDate(d.day)}: ${d.total_page_views} views, ${d.unique_ips} IPs, ${d.unique_visitor_ids} visitors`)
        .join("\n")
    );
  }

  if (command === "/ips") {
    const { data, error } = await supabase
      .from("ip_repeat_counts")
      .select("*")
      .order("visit_count", { ascending: false })
      .limit(10);
    if (error) throw error;
    if (!data?.length) return "No data yet.";
    return (
      "*Top IPs*\n" +
      data
        .map((r) => {
          const loc = [r.city, r.region, r.country].filter(Boolean).join(", ");
          return `${r.ip} — ${r.visit_count} visits (${r.days_active} days)${loc ? `\n  📍 ${loc}` : ""}`;
        })
        .join("\n")
    );
  }

  if (command === "/recent") {
    const { data, error } = await supabase
      .from("recent_visits")
      .select("*")
      .order("viewed_at", { ascending: false })
      .limit(15);
    if (error) throw error;
    if (!data?.length) return "No data yet.";
    return (
      "*Last 15 visits*\n" +
      data
        .map((r) => {
          const time = new Date(r.viewed_at).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          });
          const loc = [r.city, r.country].filter(Boolean).join(", ");
          return `${time} — ${r.path} — ${r.ip}${loc ? ` (${loc})` : ""}`;
        })
        .join("\n")
    );
  }

  if (command === "/help" || command === "/start") {
    return (
      "Commands:\n" +
      "/today — today's views & unique visitors\n" +
      "/week — last 7 days\n" +
      "/ips — repeat visits by IP, with location\n" +
      "/recent — last 15 individual visits (page, IP, time, location)\n\n" +
      "Or just ask anything in plain English, e.g. \"how many visitors from Canada last week?\""
    );
  }

  if (command.startsWith("/")) {
    return 'Unknown command. Send /help to see what I can do, or just ask a question in plain English.';
  }

  // Not a slash command — treat the whole message as a free-text question.
  return await answerFreeformQuestion(text.trim());
}

async function sendMessage(chatId: number | string, text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("ok", { status: 200 });
  }

  if (WEBHOOK_SECRET) {
    const got = req.headers.get("x-telegram-bot-api-secret-token");
    if (got !== WEBHOOK_SECRET) {
      return new Response("forbidden", { status: 403 });
    }
  }

  try {
    const update = await req.json();
    const chatId = update?.message?.chat?.id;
    const text: string | undefined = update?.message?.text;

    if (chatId == null || !text) {
      return new Response("ok", { status: 200 });
    }

    if (ALLOWED_CHAT_ID && String(chatId) !== String(ALLOWED_CHAT_ID)) {
      // Silently ignore messages from anyone but you.
      return new Response("ok", { status: 200 });
    }

    let reply: string;
    try {
      reply = await handleCommand(text);
    } catch (err) {
      console.error(err);
      reply = "Something went wrong answering that — try again.";
    }
    await sendMessage(chatId, reply);
  } catch (err) {
    console.error(err);
  }

  // Always 200, so Telegram doesn't retry-storm us on errors.
  return new Response("ok", { status: 200 });
});
