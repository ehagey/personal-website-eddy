DROP POLICY IF EXISTS "Anyone can insert video views" ON public.video_views;
CREATE POLICY "Anyone can insert video views"
ON public.video_views
FOR INSERT
TO anon, authenticated
WITH CHECK (
  video_name IS NOT NULL
  AND length(video_name) BETWEEN 1 AND 100
  AND (user_agent IS NULL OR length(user_agent) <= 500)
  AND (referrer IS NULL OR length(referrer) <= 500)
);