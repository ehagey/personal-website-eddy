import { Link } from 'react-router-dom';

const WritingSection = () => {
  return (
    <section id="writing" className="py-12 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg mb-8 text-center">Writing</h2>
        
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/blog/become-someone-people-can-depend-on"
            className="block text-gray-900 hover:text-blue-600 transition-colors"
          >
            <h3 className="text-lg font-medium">
              Become Someone People can Depend on
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;