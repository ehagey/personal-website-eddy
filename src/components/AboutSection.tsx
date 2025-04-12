
import { Check } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Node.js', 'Next.js', 'Tailwind CSS',
    'REST API', 'GraphQL', 'Figma'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 animate-slideUp opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="heading-lg mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm John, a passionate web developer with a keen interest in creating beautiful, 
                functional, and user-friendly websites and applications.
              </p>
              <p>
                I started my journey in web development in 2018, and since then, I've been constantly learning 
                and improving my skills. I enjoy the process of bringing ideas to life in the browser.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes.
              </p>
            </div>
          </div>
          
          <div className="flex-1 animate-slideUp opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="heading-md mb-6">My Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Check size={16} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
