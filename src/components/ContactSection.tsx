import { InlineWidget } from 'react-calendly';
const ContactSection = () => {
  return <section id="contact" style={{
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <h2 style={{
      fontSize: '16px',
      marginBottom: '10px',
      fontWeight: 'normal'
    }}>Contact</h2>
      <div style={{
      marginBottom: '15px',
      fontSize: '14px',
      color: '#666'
    }}>
        <p style={{ marginBottom: '5px' }}>Montreal, QC</p>
        <a href="mailto:eddy.hage1@gmail.com" style={{
        color: '#333',
        textDecoration: 'underline'
      }}>
          eddy.hage1@gmail.com
        </a>
      </div>
      
      <div style={{
      height: '400px',
      width: '100%'
    }}>
        <InlineWidget url="https://calendly.com/eddy-hage1" styles={{
        height: '100%',
        width: '100%'
      }} />
      </div>
    </section>;
};
export default ContactSection;