// Telegram bot that answers questions about site traffic by querying page_views.
// Message the bot from your phone (/today, /week, /ips, /recent) and it replies with
// the numbers. Set up as a Telegram webhook pointing at this function.
//
// Required secrets (Supabase dashboard -> Edge Functions -> Manage secrets):
//   TELEGRAM_BOT_TOKEN        - from @BotFather when you create the bot
//   TELEGRAM_ALLOWED_CHAT_ID  - your own Telegram chat id (see setup notes); if unset,
//                               the bot will reply to anyone who messages it
//   TELEGRAM_WEBHOOK_SECRET   - any random string you make up; must match the
//                               secret_token used when registering the webhook
import { createClient } from "jsr:@supabase/supabase-js@2";

const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const ALLOWED_CHAT_ID = Deno.env.get("TELEGRAM_ALLOWED_CHAT_ID");
const WEBHOOK_SECRET = Deno.env.get("TELEGRAM_WEBHOOK_SECRET");

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

async function sendMessage(chatId: number | string, text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

async function handleCommand(command: string): Promise<string> {
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

  return (
    "Commands:\n" +
    "/today — today's views & unique visitors\n" +
    "/week — last 7 days\n" +
    "/ips — repeat visits by IP, with location\n" +
    "/recent — last 15 individual visits (page, IP, time, location)"
  );
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

    const reply = await handleCommand(text.trim().toLowerCase());
    await sendMessage(chatId, reply);
  } catch (err) {
    console.error(err);
  }

  // Always 200, so Telegram doesn't retry-storm us on errors.
  return new Response("ok", { status: 200 });
});
