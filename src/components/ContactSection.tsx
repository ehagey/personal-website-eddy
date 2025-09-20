import { InlineWidget } from 'react-calendly';

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Get In Touch</h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind or just want to say hello? Please feel free to schedule a meeting using the calendar below.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Location</h3>
              <p style={{ color: '#666' }}>Montreal, QC</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Email</h3>
              <a href="mailto:eddy.hage1@gmail.com" style={{ color: '#333', textDecoration: 'underline' }}>
                eddy.hage1@gmail.com
              </a>
            </div>
          </div>
          
          <div style={{ border: '1px solid #ddd', height: '500px' }}>
            <InlineWidget 
              url="https://calendly.com/eddy-hage1" 
              styles={{ height: '100%', width: '100%' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;