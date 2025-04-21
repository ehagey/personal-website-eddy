
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg mb-4 text-center">Blog</h1>
          <p className="subtitle mx-auto mb-12 text-center">Thoughts, insights, and reflections on life, career, research, AI, and pretty much anything else.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BlogPost 
              title="Self-Awareness: a Double-Edged Sword" 
              date="April 20, 2025" 
              slug="self-awareness-double-edged-sword"
              content="There's a lot of great things that come from knowing yourself too well. But, sometimes you just can't let yourself off the hook. Self-awareness is supposed to be this golden ticket to becoming better. And it is, mostly. It's how I've caught my worst habits before they became permanent addresses..."
              isPreview={true}
            />

            <BlogPost 
              title="Become Someone People can Depend on" 
              date="April 12, 2025" 
              slug="become-someone-people-can-depend-on" 
              content="There's something deeply fulfilling about stepping up and taking ownership of your path and decisions. It's not always easy, but it's worth it. Because when you choose to carry the weight of responsibility, you grow into someone you—and others—can depend on..."
              isPreview={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
