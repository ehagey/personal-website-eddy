const ContactSection = () => {
  return <div>
      <p style={{
      fontSize: '14px',
      color: 'var(--site-text-muted)',
      marginBottom: '20px',
      lineHeight: '1.4'
    }}>Have a project in mind or just want to say hello? Please do reach out!</p>
      
      <div style={{
      marginBottom: '20px',
      fontSize: '14px'
    }}>
        <p style={{
        marginBottom: '5px',
        color: 'var(--site-text)'
      }}>Montreal, QC</p>
        <a href="mailto:eddy.hage1@gmail.com" style={{
        color: 'var(--site-link)',
        textDecoration: 'underline'
      }}>
          eddy.hage1@gmail.com
        </a>
        <p style={{ marginTop: '10px', fontSize: '14px', color: 'var(--site-text-muted)' }}>CV available upon request.</p>
      </div>
    </div>;
};
export default ContactSection;
