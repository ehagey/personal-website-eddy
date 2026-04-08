CREATE TABLE public.video_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_name TEXT NOT NULL,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  referrer TEXT
);

ALTER TABLE public.video_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert video views" ON public.video_views FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "No one can read video views from client" ON public.video_views FOR SELECT TO anon, authenticated USING (false);