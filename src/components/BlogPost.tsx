
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
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Link 
        to="/" 
        style={{ 
          color: 'var(--site-text-muted)', 
          textDecoration: 'underline',
          fontSize: '14px',
          marginBottom: '30px',
          display: 'inline-block'
        }}
      >
        ← Back to Home
      </Link>
      
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        marginBottom: '30px',
        color: 'var(--site-text)',
        lineHeight: '1.3'
      }}>
        {title}
      </h1>
      
      <div style={{ 
        lineHeight: '1.7', 
        fontSize: '16px',
        color: 'var(--site-text)'
      }}>
        {content}
      </div>
    </div>
  );
};

export default BlogPost;
