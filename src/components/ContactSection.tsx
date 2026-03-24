const ContactSection = () => {
  return <section id="contact" style={{
    padding: '5px 20px 20px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <h2 style={{
      fontSize: '24px',
      marginBottom: '10px',
      fontWeight: 'normal'
    }}>Contact</h2>
      <p style={{
      fontSize: '14px',
      color: '#666',
      marginBottom: '20px',
      lineHeight: '1.4'
    }}>Have a project in mind or just want to say hello? Please feel free to reach out.</p>
      
      <div style={{
      marginBottom: '20px',
      fontSize: '14px'
    }}>
        <p style={{
        marginBottom: '5px'
      }}>Montreal, QC</p>
        <a href="mailto:eddy.hage1@gmail.com" style={{
        color: '#333',
        textDecoration: 'underline'
      }}>
          eddy.hage1@gmail.com
        </a>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>CV available upon request.</p>
      </div>
    </section>;
};
export default ContactSection;