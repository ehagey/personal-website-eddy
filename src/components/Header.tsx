import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            Eddy Hage-Youssef
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-gray-700 ${
                location.pathname === '/' ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-gray-700 ${
                location.pathname.startsWith('/blog') ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;