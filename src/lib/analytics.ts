// Lightweight page-view beacon. Sends path + referrer + a per-browser visitor id to the
// "track-pageview" Edge Function, which records the real request IP server-side (see
// supabase/functions/track-pageview). Never throws — tracking must never break the site.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const TRACK_URL = `${SUPABASE_URL}/functions/v1/track-pageview`;
const VISITOR_ID_KEY = "visitor_id";

function getVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  } catch {
    return "unknown";
  }
}

export function trackPageView(path: string) {
  if (import.meta.env.DEV) return; // don't pollute real stats with local dev traffic
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  try {
    fetch(TRACK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        path,
        visitor_id: getVisitorId(),
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ignore
  }
}
