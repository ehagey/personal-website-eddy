import { Link } from 'react-router-dom';

const WritingSection = () => {
  return (
    <section id="writing" className="py-12 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg mb-8 text-center">Writing</h2>
        
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/blog/become-someone-people-can-depend-on"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              Become Someone People can Depend on
            </h3>
            <p className="text-gray-500 text-sm">April 12, 2025</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;