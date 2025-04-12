
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slideUp opacity-0" style={{
          animationDelay: '0.2s'
        }}>
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="subtitle mx-auto">
            Have a project in mind or just want to say hello? Schedule a meeting using the calendar below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slideUp opacity-0" style={{
            animationDelay: '0.3s'
          }}>
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-gray-600">Montreal, QC</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="text-gray-600 hover:text-primary transition-colors">eddy.hage1@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp opacity-0" style={{
            animationDelay: '0.4s'
          }}>
            <div className="bg-white rounded-lg p-6 shadow-sm" style={{ height: '650px' }}>
              <InlineWidget 
                url="https://calendly.com/your-calendly-username" 
                styles={{ 
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
