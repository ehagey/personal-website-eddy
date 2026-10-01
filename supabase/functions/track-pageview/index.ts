// Receives a page-view beacon from the site and logs it server-side, so the IP recorded
// is the real one read off the HTTP request — not something the browser self-reports,
// which a visitor could fake.
import { createClient } from "jsr:@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function getClientIp(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("cf-connecting-ip") ?? req.headers.get("x-real-ip");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  let body: { path?: string; referrer?: string; visitor_id?: string };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: CORS_HEADERS });
  }

  const path = (body.path ?? "").slice(0, 300);
  if (!path) {
    return new Response("Missing path", { status: 400, headers: CORS_HEADERS });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error } = await supabase.from("page_views").insert({
    path,
    referrer: (body.referrer ?? "").slice(0, 500) || null,
    visitor_id: (body.visitor_id ?? "").slice(0, 100) || null,
    user_agent: (req.headers.get("user-agent") ?? "").slice(0, 500) || null,
    ip: getClientIp(req),
    country: req.headers.get("cf-ipcountry") ?? null,
  });

  if (error) {
    console.error(error);
    return new Response("Error", { status: 500, headers: CORS_HEADERS });
  }

  return new Response("ok", { status: 200, headers: CORS_HEADERS });
});
