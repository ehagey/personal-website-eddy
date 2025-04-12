import { Check } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

const AboutSection = () => {
  const skills = ['Programming', 'Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'Research', 'Statistical Analysis', 'LLM Engineering', 'Prompt Design and Engineering', 'Problem Structuring'];
  const interests = ['AI', 'Judo (Black Belt)', 'Guitar', 'Reading'];
  const quotes = [{
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  }, {
    text: "It is not the strongest of the species that survives, nor the most intelligent. It is the one most adaptable to change.",
    author: "Charles Darwin"
  }, {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  }];
  return <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 animate-slideUp opacity-0" style={{
            animationDelay: '0.2s'
          }}>
              <h2 className="heading-lg mb-3">About Me</h2>
              <div className="space-y-3 text-gray-600">
                <p>I'm Eddy, a fourth-year Computer Science and Statistics student at McGill University.</p>
                
                <p>My experience and interest lies in AI and data analytics. I have previously built RAG and Ontology frameworks for a domain-specific Large Language Model. Currently, my interest and focus is on researching and building AI agents and developing robust evaluation and benchmarking criteria for LLMs.</p>
                
                <p>Outside of academics, I enjoy hitting the gym, playing guitar, practicing Judo, and spending time with family and friends.</p>
              </div>
            </div>
            
            <div className="flex-1 animate-slideUp opacity-0" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="heading-md mb-3">My Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map(skill => <div key={skill} className="flex items-center space-x-2 text-sm">
                    <Check size={14} className="text-primary" />
                    <span>{skill}</span>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
          animationDelay: '0.6s'
        }}>
            <div className="mb-4">
              <h3 className="heading-md mb-3">My Projects</h3>
              <p className="text-gray-600 text-sm">Here are some of the projects I have been working on lately. I would love to collaborate if you find anything interesting!</p>
            </div>
            <ProjectsSection />
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
          animationDelay: '0.8s'
        }}>
            <h3 className="heading-md mb-4">Interests & Hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map(interest => <div key={interest} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm">
                  <span className="font-medium">{interest}</span>
                </div>)}
            </div>
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
          animationDelay: '1s'
        }}>
            <h3 className="heading-md mb-4">Favorite Quotes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quotes.map((quote, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <blockquote className="text-gray-700 italic mb-2 text-sm">"{quote.text}"</blockquote>
                  <p className="text-right text-xs font-medium text-gray-500">— {quote.author}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
