import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-sm font-medium text-gray-500 mb-3">Hello:) My name is</p>
            <h1 className="heading-xl mb-4">
              <span className="block text-xl md:text-2xl">Eddy Hage-Youssef</span>
            </h1>
            <p className="subtitle mb-4">
              I'm passionate about building software that improves people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group" asChild>
                <a href="#projects">
                  View My Work 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" className="group" asChild>
                <a href="/resume">
                  Resume
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex space-x-4 mt-4 sm:mt-0 sm:ml-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={20} />
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
          
          <div className="flex-1 max-w-md order-first lg:order-last animate-fadeIn" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-gray-600 opacity-75 blur"></div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                <img alt="Profile" src="/lovable-uploads/e3682f1c-f543-43d2-8b64-8b6d2732dc0e.jpg" className="w-full h-auto aspect-[4/3] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;