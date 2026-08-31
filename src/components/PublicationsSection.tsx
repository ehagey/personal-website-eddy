import AcademicCollaboratorsSection from '@/components/AcademicCollaboratorsSection';
import EditingSection from '@/components/EditingSection';

const PublicationsSection = () => {
  return <div>
      <p style={{
      fontSize: '13px',
      color: 'var(--site-text-faint)',
      marginBottom: '15px',
      fontWeight: 600,
      fontStyle: 'italic'
    }}>Author names on each publication are listed in alphabetical order by surname.</p>
      <div style={{
      fontSize: '14px',
      lineHeight: '1.6',
      color: 'var(--site-text-muted)'
    }}>
        <div style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid var(--site-border)'
      }}>
          <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7111078" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
              Confirmation Bias in LLM Pricing Recommendations
            </a>
            <span style={{
              fontWeight: 'normal',
              color: 'var(--site-text-muted)'
            }}>, Maxime C. Cohen and Eddy Hage-Youssef</span>
          </h3>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}>Submitted</p>
        </div>

        <div style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid var(--site-border)'
      }}>
          <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
            <a href="https://cmr.berkeley.edu/2026/08/69-1-three-winning-ai-strategies/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
              Three Winning AI Strategies
            </a>
            <span style={{
              fontWeight: 'normal',
              color: 'var(--site-text-muted)'
            }}>, Maxime C. Cohen, Eddy Hage-Youssef, Daniel M. McCarthy, and D. Daniel Sokol</span>
          </h3>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}>California Management Review (August 15, 2026)</p>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}>A longer pre-print version of this paper is available <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6331258" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>on SSRN</a>.</p>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}><a href="https://www.dropbox.com/scl/fi/gl99iry9nvwhxtyp77d9i/three-bets-AI-slides.pptx?rlkey=66yqsamsx7sdayvypkm58ra8q&e=1&st=9hwhj0wa&dl=0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>Slides</a> (prepared by Professor McCarthy)</p>
        </div>

        <div style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid var(--site-border)'
      }}>
          <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
            <a href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
              What Happens When AI Sets Wages
            </a>
            <span style={{
              fontWeight: 'normal',
              color: 'var(--site-text-muted)'
            }}>, Maxime C. Cohen, Eddy Hage-Youssef, and Warut Khern-am-nuai</span>
          </h3>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}>Harvard Business Review, 104(2):40-42, 2026</p>
        </div>

        <div style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid var(--site-border)'
      }}>
          <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5404966" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
              When AI Sets Wages: Biases and Labor Discrimination in Generative Pricing
            </a>
            <span style={{
              fontWeight: 'normal',
              color: 'var(--site-text-muted)'
            }}>, Maxime C. Cohen, Eddy Hage-Youssef, and Warut Khern-am-nuai</span>
          </h3>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)'
        }}>AI & Ethics, Major Revision</p>
        </div>

        <div>
          <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353923" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
              Generative AI for Data Scraping
            </a>
            <span style={{
              fontWeight: 'normal',
              color: 'var(--site-text-muted)'
            }}>, Maxime C. Cohen and Eddy Hage-Youssef</span>
          </h3>
          <p style={{
          fontSize: '13px',
          color: 'var(--site-text-faint)',
          marginBottom: '5px'
        }}>INFORMS Journal on Data Science, Minor Revision</p>
        </div>
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '15px', marginTop: '25px', fontWeight: 500, color: 'var(--site-text)' }}>Academic Collaborators</h3>
      <AcademicCollaboratorsSection />

      <h3 style={{ fontSize: '18px', marginBottom: '15px', marginTop: '25px', fontWeight: 500, color: 'var(--site-text)' }}>Editing</h3>
      <EditingSection />
    </div>;
};
export default PublicationsSection;
