
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is transforming patient care and clinical decision-making.",
    date: "April 5, 2025",
    category: "Healthcare Tech",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  },
  {
    id: 2,
    title: "Evaluating Large Language Models for Clinical Use",
    excerpt: "A framework for assessing the accuracy and reliability of LLMs in healthcare applications.",
    date: "March 22, 2025",
    category: "AI Research",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  },
  {
    id: 3,
    title: "Ethics in Healthcare AI",
    excerpt: "Navigating the complex ethical considerations of implementing AI systems in clinical settings.",
    date: "February 18, 2025",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  }
];

const Blog = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-4">Blog</h1>
            <p className="subtitle mx-auto">
              Thoughts, insights, and perspectives on healthcare technology, AI research, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href={`/blog/${post.id}`}>Read More</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
