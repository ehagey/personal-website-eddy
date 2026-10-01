-- Drop referrer (no longer tracked), add per-visit geolocation, and drop the
-- aggregate views that are no longer wanted (top_pages, top_referrers) in favor
-- of seeing every individual visit.

DROP VIEW IF EXISTS public.top_pages;
DROP VIEW IF EXISTS public.top_referrers;

ALTER TABLE public.page_views DROP COLUMN IF EXISTS referrer;

ALTER TABLE public.page_views
  ADD COLUMN IF NOT EXISTS country TEXT,
  ADD COLUMN IF NOT EXISTS region TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT,
  ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;

-- Every individual visit, newest first: IP, page, time, and location.
CREATE OR REPLACE VIEW public.recent_visits AS
SELECT
  viewed_at,
  ip,
  path,
  city,
  region,
  country,
  visitor_id
FROM public.page_views
ORDER BY viewed_at DESC;

-- Every IP that's ever visited, how many times, over how many days, and its
-- most recently seen location.
CREATE OR REPLACE VIEW public.ip_repeat_counts AS
SELECT
  ip,
  COUNT(*) AS visit_count,
  COUNT(DISTINCT (viewed_at AT TIME ZONE 'UTC')::date) AS days_active,
  MIN(viewed_at) AS first_seen,
  MAX(viewed_at) AS last_seen,
  (ARRAY_AGG(city ORDER BY viewed_at DESC))[1] AS city,
  (ARRAY_AGG(region ORDER BY viewed_at DESC))[1] AS region,
  (ARRAY_AGG(country ORDER BY viewed_at DESC))[1] AS country
FROM public.page_views
WHERE ip IS NOT NULL
GROUP BY ip
ORDER BY visit_count DESC;
