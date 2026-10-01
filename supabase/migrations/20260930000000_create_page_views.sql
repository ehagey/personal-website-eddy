-- Page view analytics: one row per page view, with the real client IP, a per-browser
-- visitor id, path, referrer, and user agent.
--
-- Rows are inserted only by the "track-pageview" Edge Function, using the service role
-- key (which bypasses RLS) after reading the real IP off the HTTP request. The browser
-- never inserts directly, so RLS is enabled with NO policies at all: anon/authenticated
-- clients can neither read nor write this table. Only the Edge Function (service role)
-- and you, via the Supabase dashboard / SQL editor, can touch it.

CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip TEXT,
  country TEXT,
  visitor_id TEXT
);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

CREATE INDEX page_views_viewed_at_idx ON public.page_views (viewed_at);
CREATE INDEX page_views_ip_idx ON public.page_views (ip);
CREATE INDEX page_views_visitor_id_idx ON public.page_views (visitor_id);

-- Convenience views for the questions you'll actually ask ----------------------------

-- Unique visitors per day, counted two ways: by IP, and by visitor_id (a random id
-- stored in each browser's localStorage — it survives a changing IP, but resets if
-- someone clears site data or visits from a different browser/device).
CREATE VIEW public.daily_unique_visitors AS
SELECT
  (viewed_at AT TIME ZONE 'UTC')::date AS day,
  COUNT(*) AS total_page_views,
  COUNT(DISTINCT ip) AS unique_ips,
  COUNT(DISTINCT visitor_id) AS unique_visitor_ids
FROM public.page_views
GROUP BY 1
ORDER BY 1 DESC;

-- Every IP that has ever visited: how many times, over how many distinct days, and when.
CREATE VIEW public.ip_repeat_counts AS
SELECT
  ip,
  COUNT(*) AS visit_count,
  COUNT(DISTINCT (viewed_at AT TIME ZONE 'UTC')::date) AS days_active,
  MIN(viewed_at) AS first_seen,
  MAX(viewed_at) AS last_seen
FROM public.page_views
WHERE ip IS NOT NULL
GROUP BY ip
ORDER BY visit_count DESC;

-- Most-visited pages.
CREATE VIEW public.top_pages AS
SELECT
  path,
  COUNT(*) AS views,
  COUNT(DISTINCT ip) AS unique_ips
FROM public.page_views
GROUP BY path
ORDER BY views DESC;

-- Where traffic comes from.
CREATE VIEW public.top_referrers AS
SELECT
  NULLIF(referrer, '') AS referrer,
  COUNT(*) AS views
FROM public.page_views
GROUP BY 1
ORDER BY views DESC;
