
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  slug: string;
  isPreview?: boolean;
}

const BlogPost = ({ title, date, content, slug, isPreview = false }: BlogPostProps) => {
  if (isPreview) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <div className="prose prose-sm max-w-none line-clamp-3 mb-4 text-gray-600">
          {typeof content === 'string' 
            ? content.substring(0, 150) + '...'
            : <p>Read the full article...</p>}
        </div>
        <Link 
          to={`/blog/${slug}`} 
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
          Read more
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <article className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 text-center">
            <h1 className="heading-lg mb-2">{title}</h1>
            <p className="text-gray-500">{date}</p>
          </header>
          
          <div className="prose prose-lg mx-auto">
            {content}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
