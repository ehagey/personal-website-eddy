// Receives a page-view beacon from the site and logs it server-side, so the IP recorded
// is the real one read off the HTTP request — not something the browser self-reports,
// which a visitor could fake. Also geolocates the IP (country/region/city/lat/lon) via a
// free lookup so every visit has a location attached.
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

interface Geo {
  country?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
}

async function geolocate(ip: string | null): Promise<Geo> {
  if (!ip) return {};
  try {
    const res = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,lat,lon`,
    );
    const data = await res.json();
    if (data.status !== "success") return {};
    return {
      country: data.country ?? undefined,
      region: data.regionName ?? undefined,
      city: data.city ?? undefined,
      latitude: typeof data.lat === "number" ? data.lat : undefined,
      longitude: typeof data.lon === "number" ? data.lon : undefined,
    };
  } catch {
    return {}; // a failed lookup should never block logging the visit
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  let body: { path?: string; visitor_id?: string };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: CORS_HEADERS });
  }

  const path = (body.path ?? "").slice(0, 300);
  if (!path) {
    return new Response("Missing path", { status: 400, headers: CORS_HEADERS });
  }

  const ip = getClientIp(req);
  const geo = await geolocate(ip);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error } = await supabase.from("page_views").insert({
    path,
    visitor_id: (body.visitor_id ?? "").slice(0, 100) || null,
    user_agent: (req.headers.get("user-agent") ?? "").slice(0, 500) || null,
    ip,
    country: geo.country ?? null,
    region: geo.region ?? null,
    city: geo.city ?? null,
    latitude: geo.latitude ?? null,
    longitude: geo.longitude ?? null,
  });

  if (error) {
    console.error(error);
    return new Response("Error", { status: 500, headers: CORS_HEADERS });
  }

  return new Response("ok", { status: 200, headers: CORS_HEADERS });
});
