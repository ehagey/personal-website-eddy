import { Check } from 'lucide-react';

const AboutSection = () => {
  const skills = ['Programming', 'Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'Research', 'Statistical Analysis', 'LLM Engineering', 'Prompt Design and Engineering', 'Problem Structuring'];
  const hobbies = [
    {
      name: 'Judo',
      details: [
        'Black Belt',
        '7× Lebanese National Champion', 
        'Arab Championship First Place (2017)'
      ]
    },
    {
      name: 'Guitar',
      details: [
        'PRS Silver Sky (Electric)',
        'Princeton Reverb (Amp)', 
        'Art & Lutherie (Acoustic)'
      ],
      context: '(for the geeks)'
    },
    {
      name: 'Reading',
      details: [
        'Really everything, but I\'m mainly interested in:',
        'Economics',
        'Geopolitics', 
        'Warfare'
      ]
    }
  ];
  const quotes = [{
    text: "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  }, {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  }, {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  }];
  return <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 animate-slideUp opacity-0" style={{
            animationDelay: '0.2s'
          }}>
              <h2 className="heading-lg mb-2">About Me</h2>
              <div className="space-y-3 text-gray-600">
                <p>I'm Eddy, a fourth-year Computer Science and Statistics student at McGill University.</p>
                
                <p>My experience and interest lies in AI and data analytics. I have previously built RAG and Ontology frameworks for a domain-specific Large Language Model. Currently, my interest and focus is on researching and building AI agents and developing robust evaluation and benchmarking criteria for LLMs.</p>
                
                <p>Outside of academics, I enjoy hitting the gym, playing guitar, practicing Judo, and spending time with family and friends.</p>
              </div>
            </div>
            
            <div className="flex-1 animate-slideUp opacity-0" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="heading-md mb-2">My Skills</h3>
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
            <h2 className="heading-lg mb-4">Featured Project</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" 
                    alt="AI Health Institute" 
                    className="w-full h-full object-cover object-center"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
                <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-2">AI Health Institute</h4>
                    <p className="text-gray-700 mb-4 text-sm">Advancing rigorous evaluation and performance assessment of large language models (LLMs) to ensure they deliver accurate, reliable, and clinically relevant outputs that improve patient care and support clinicians.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Healthcare', 'AI', 'Research', 'LLMs'].map(tag => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <a 
                      href="https://aihealthinstitute.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-9 px-3 py-2"
                    >
                      Visit Site
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
          animationDelay: '0.8s'
        }}>
            <h3 className="heading-md mb-2">Hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map(hobby => (
                <div 
                  key={hobby.name} 
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold text-base mb-2 text-gray-800">
                    {hobby.name} 
                    {hobby.context && <span className="text-xs text-gray-500 ml-2">{hobby.context}</span>}
                  </div>
                  {Array.isArray(hobby.details) ? (
                    <ul className="text-xs text-gray-600 leading-relaxed list-disc pl-4">
                      {hobby.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-gray-600 leading-relaxed">{hobby.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
          animationDelay: '1s'
        }}>
            <h3 className="heading-md mb-2">Favorite Quotes</h3>
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
