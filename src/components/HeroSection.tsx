
import { ArrowRight, GitHub, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm font-medium text-gray-500 mb-3">Hi, my name is</p>
            <h1 className="heading-xl mb-4">
              <span className="block">John Doe</span>
              <span className="block text-muted-foreground">I build things for the web</span>
            </h1>
            <p className="subtitle mb-8">
              I'm a software developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group">
                View My Work 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex space-x-4 mt-4 sm:mt-0 sm:ml-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <GitHub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-md order-first lg:order-last animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-gray-600 opacity-75 blur"></div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" 
                  alt="Profile" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
