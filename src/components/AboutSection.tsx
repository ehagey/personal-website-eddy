
import { Check } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

const AboutSection = () => {
  const skills = [
    'Artificial Intelligence', 'Machine Learning', 'Healthcare Tech', 
    'React', 'TypeScript', 'Node.js',
    'Data Analysis', 'Research', 'Project Management'
  ];
  
  const interests = [
    'Healthcare Innovation', 'AI Ethics', 'Reading',
    'Photography', 'Hiking', 'Chess'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 animate-slideUp opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="heading-lg mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm Eddy, a passionate technologist with a focus on the intersection of artificial intelligence and healthcare.
                  I believe in creating technology that serves humanity and improves patient outcomes.
                </p>
                <p>
                  My professional journey has led me to work on innovative projects that bridge the gap between cutting-edge
                  AI research and practical healthcare applications. I'm particularly interested in ensuring that AI tools
                  are accurate, reliable, and clinically relevant.
                </p>
                <p>
                  When I'm not working on technology solutions, you can find me exploring nature trails, capturing moments through photography,
                  or engaging in a thoughtful game of chess.
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
          
          {/* Include ProjectsSection in the About Page */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.6s' }}>
            <ProjectsSection />
          </div>
          
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.8s' }}>
            <h3 className="heading-md mb-6">Interests & Hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <div key={interest} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium">{interest}</span>
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
