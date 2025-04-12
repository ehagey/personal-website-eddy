import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Blog = () => {
  return <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-lg mb-4">Blog</h1>
          <p className="subtitle mx-auto mb-8">Thoughts, insights, and perspectives on technology, AI research, and more.</p>
          
          <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Blog Posts Coming Soon</h2>
            <p className="text-gray-600">I'm currently working on creating compelling content. Please stay tuned for the coming blog posts!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Blog;