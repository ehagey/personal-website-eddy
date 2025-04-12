
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Blog', 'Contact'].map(item => <li key={item}>
                  <a href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
              <li>
                <a href="/resume" className="hover:text-white transition-colors">Resume</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/ehagey" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/eddy-hage-youssef-29b6b618b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/eddy.g.hage/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:eddy.hage1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="opacity-0 md:opacity-100">
              <a href="mailto:eddy.hage1@gmail.com" className="hover:text-white transition-colors">
                eddy.hage1@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {currentYear} Eddy Hage-Youssef. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
