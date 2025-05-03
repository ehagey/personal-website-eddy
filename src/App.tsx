
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import DependableBlogPost from "./pages/DependableBlogPost";
import PotentialBlogPost from "./pages/PotentialBlogPost";
import ManBlogPost from "./pages/ManBlogPost";
import PartnerBlogPost from "./pages/PartnerBlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/become-someone-people-can-depend-on" element={<DependableBlogPost />} />
          <Route path="/blog/realize-your-potential" element={<PotentialBlogPost />} />
          <Route path="/blog/what-it-means-to-be-a-man" element={<ManBlogPost />} />
          <Route path="/blog/become-the-right-person" element={<PartnerBlogPost />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
