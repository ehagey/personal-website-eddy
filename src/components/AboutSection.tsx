
import { Check } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

const AboutSection = () => {
  const skills = [
    'Programming', 'Machine Learning', 'Data Analytics', 
    'Artificial Intelligence', 'Research', 'Statistical Analysis',
    'Large Language Model Engineering', 'Prompt Design', 'Problem Structuring'
  ];
  
  const interests = [
    'AI', 'Judo (Black Belt)', 'Guitar', 'Reading'
  ];
  
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "It is not the strongest of the species that survives, nor the most intelligent. It is the one most adaptable to change.",
      author: "Charles Darwin"
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    }
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
                  I'm Eddy, a 4th year Computer Science and Statistics student at McGill University. I am 22 years old. I was born and raised in Lebanon.
                </p>
                <p>
                  I have experience building AI agents for task automation, and I have a strong interest and research background in LLMs.
                </p>
                <p>
                  Outside of school and work, I enjoy hitting the gym, playing guitar, practicing Judo, and spending time with my family and friends.
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
          
          {/* Projects Section */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="mb-8">
              <h3 className="heading-md mb-4">My Projects</h3>
              <p className="text-gray-600">
                Here are some of the projects I have been working on lately. Please do get in touch me if you find anything interesting. I would love to collaborate!
              </p>
            </div>
            <ProjectsSection />
          </div>
          
          {/* Interests & Hobbies Section */}
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
          
          {/* Favorite Quotes Section */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '1s' }}>
            <h3 className="heading-md mb-6">Favorite Quotes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quotes.map((quote, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <blockquote className="text-gray-700 italic mb-2">"{quote.text}"</blockquote>
                  <p className="text-right text-sm font-medium text-gray-500">— {quote.author}</p>
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
