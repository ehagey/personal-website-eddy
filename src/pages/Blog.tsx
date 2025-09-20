
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
          
          <div className="max-w-2xl mx-auto">
            <BlogPost 
              title="Become Someone People can Depend on" 
              date="April 12, 2025" 
              slug="become-someone-people-can-depend-on" 
              content="There's something deeply fulfilling about taking ownership of your path and decisions. It's not always easy, but it's worth it. Because when you choose to carry the weight of responsibility, you grow into someone you and others can depend on..."
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
