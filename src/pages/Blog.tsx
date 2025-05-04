
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
              title="Practical Lessons from a Student Building AI Agents"
              date="May 3, 2025"
              slug="practical-lessons-ai-agents"
              content="I'm still learning and making mistakes. But, I've discovered some practical approaches that have helped me not just start projects but actually finish them. As a student diving into AI development and research, I'm very grateful to have had the chance to work on very exciting projects alongside exceptional collaborators and mentors."
              isPreview={true}
            />
            <BlogPost 
              title="Become the Right Person before Looking for the Right Partner"
              date="May 1, 2025"
              slug="become-the-right-person"
              content="Finding the right person to share your life with is perhaps the most important decision you'll ever make. But, I think many of us approach this decision with the wrong perspective. Instead of looking for the 'right person', it's probably more productive to ask yourself what kind of partner would be drawn to the person you are today..."
              isPreview={true}
            />
            <BlogPost 
              title="What it Means to be a Man"
              date="April 28, 2025"
              slug="what-it-means-to-be-a-man"
              content="A man finds purpose in protecting and providing for those he cares about. He uses his strength to keep others safe and creates stability for those who depend on him. When necessary, men stand on the front lines when duty calls to defend our freedoms and way of life..."
              isPreview={true}
            />
            <BlogPost 
              title="Realize your Potential"
              date="April 20, 2025"
              slug="realize-your-potential"
              content="We have this one wild, unrepeatable shot at building a life worth living, and the fear of not making the most out of it eclipses everything else."
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
