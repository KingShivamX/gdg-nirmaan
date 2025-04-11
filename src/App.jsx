import bgImage from './assets/websiteBackground.png';
import gdgLogo from './assets/GDG_logo.png';
import nirmaanLogo from './assets/middleLogo.png';
import './index.css';
import { useState, useEffect } from 'react';
import problemStatements from './assets/hackathon-statements.pdf';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  return (
    <div className="relative w-full flex flex-col items-center min-h-screen" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      {/* Floating animated elements */}
      <div style={{
        position: 'absolute',
        top: '75%',
        left: '15%',
        width: '50px',
        height: '50px',
        backgroundColor: '#EA4335', // Google red
        borderRadius: '50%',
        opacity: 0.7,
        animation: 'bounce 3s infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '70px',
        height: '70px',
        backgroundColor: '#4285F4', // Google blue
        borderRadius: '50%',
        opacity: 0.7,
        animation: 'pulse 4s infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '25%',
        width: '40px',
        height: '40px',
        backgroundColor: '#FBBC05', // Google yellow
        borderRadius: '50%',
        opacity: 0.7,
        animation: 'spin 6s infinite linear'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '20%',
        width: '60px',
        height: '60px',
        backgroundColor: '#34A853', // Google green
        borderRadius: '50%',
        opacity: 0.7,
        animation: 'bounce 5s infinite'
      }}></div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes glow {
            from { filter: drop-shadow(0 0 5px rgba(255,255,255,0.6)); }
            to { filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)); }
          }
        `
      }}></style>
      {/* Header */}
      <header style={{
        padding: isMobile ? '20px' : '10px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ paddingLeft: '20px' }}>
          <img src={gdgLogo} alt="GDG Logo" style={{
            height: '60px',
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.7))',
            maxWidth: '100%'
          }} />
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: isMobile ? '20px auto' : '0 auto',
        padding: isMobile ? '20px 0' : '0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
        width: '100%'
      }}>

          <div style={{
            maxWidth: isMobile ? '350px' : '600px',
            margin: isMobile ? '0 auto 30px auto' : '0 auto 20px auto',
            width: '90%',
            animation: 'glow 3s infinite alternate',
            paddingTop: '0px'
          }}>
            <img 
              src={nirmaanLogo} 
              alt="Nirmaan Logo" 
              style={{
                width: '100%', 
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.6))'
              }}
            />
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 'bold',
            margin: '20px 0 10px',
            background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '1.5px',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            padding: '0 10px'
          }}>Nexus of Evolution</h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            color: '#333',
            fontWeight: 'bold'
          }}>Strategize • Develop • Conquer</p>
          

          
          <div style={{
            maxWidth: '800px',
            margin: '0 auto 40px',
            padding: '25px 20px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.8)',
            width: isMobile ? '85%' : 'calc(100% - 30px)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
              marginBottom: '30px',
              color: '#333',
              fontWeight: 'bold',
              lineHeight: 1.6,
              padding: '0 15px'
            }}>
              Nirmaan 2025, the 3rd Edition of our flagship hackathon, is a 48-hour hybrid competition
              open to all skill levels.
            </p>
            
            {/* Notification about problem statements */}
            <div style={{
              backgroundColor: 'rgba(66, 133, 244, 0.15)',
              borderLeft: '4px solid #4285F4',
              padding: '15px 20px',
              margin: '0 auto 25px',
              borderRadius: '8px',
              maxWidth: '90%',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            }}>
            </div>

            {/* Urgent Statement Choice Form Notice */}
            <div style={{
              backgroundColor: 'rgba(234, 67, 53, 0.15)',
              borderLeft: '4px solid #EA4335',
              padding: '15px 20px',
              margin: '0 auto 25px',
              borderRadius: '8px',
              maxWidth: '90%',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#EA4335', 
                fontWeight: 'bold',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                ⚠️ URGENT: Fill the Statement Choice Form by 6:00 PM Today! ⚠️
              </p>
              <a
                href="https://forms.gle/cGJmWVmeuCWzxCNE9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 25px',
                  backgroundColor: '#EA4335',
                  color: 'white',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#D32F2F'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#EA4335'}
              >
                Fill Statement Choice Form
              </a>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                padding: '0 15px'
              }}>
                <p style={{
                  margin: '0 0 15px 0',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: '#333',
                  fontWeight: '500'
                }}>
                  <strong>Important:</strong> You must choose one problem statement from the provided list.
                </p>
                <div style={{
                  backgroundColor: 'rgba(66, 133, 244, 0.1)',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  width: '100%'
                }}>
                  <p style={{
                    margin: '0 0 10px 0',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    color: '#4285F4',
                    fontWeight: 'bold'
                  }}>Reference for PPT (optional):</p>
                  <ol style={{
                    margin: '0',
                    paddingLeft: '20px',
                    color: '#333',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
                  }}>
                    <li>About the problem statement</li>
                    <li>Key challenges in the pre-existing solutions</li>
                    <li>Tech stack (Frontend, Backend, etc.)</li>
                    <li>Your solution</li>
                    <li>Differentiating factor</li>
                    <li>Workflow</li>
                    <li>The Market Opportunity</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div style={{ 
              textAlign: 'center',
              marginTop: '15px',
              width: '100%',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}>
              <a 
                href={problemStatements}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#4285F4',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: isMobile ? '12px 30px' : 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px)',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : 'clamp(14px, 2.5vw, 18px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  margin: '0',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  border: '2px solid white',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                  width: isMobile ? '250px' : 'auto'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#3367D6';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#4285F4';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Download Problem Statements
              </a>
              <a 
                href="https://chat.whatsapp.com/G9mFDO22DW4FB1e3HrsNvA" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: isMobile ? '12px 30px' : 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px)',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : 'clamp(14px, 2.5vw, 18px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  margin: '0',
                  boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.3s ease',
                  border: '2px solid white',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                  width: isMobile ? '250px' : 'auto'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#128C7E';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Join WhatsApp Group
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYaDYEiCb4vv5E87HxAYEiaTb_0OEnIHEGdyfiIBgJlfc5xg/viewform?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'white',
                  color: '#333',
                  fontWeight: 'bold',
                  padding: isMobile ? '12px 30px' : 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px)',
                  borderRadius: '50px',
                  fontSize: isMobile ? '16px' : 'clamp(14px, 2.5vw, 18px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  margin: '0',
                  boxShadow: '0 10px 25px rgba(234, 67, 53, 0.5)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                  width: isMobile ? '200px' : 'auto'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#3367D6';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Key Information */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '40px auto 50px', width: '95%'}}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              padding: 'clamp(20px, 5%, 30px)',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.6) inset',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{height: '4px', width: '60px', background: 'linear-gradient(to right, #4285F4, #34A853)', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto'}}></div>
              <h3 style={{fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', marginBottom: '22px', color: '#333', letterSpacing: '0.5px', paddingBottom: '8px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Event Format</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '10px', color: '#333', margin: '0 auto', maxWidth: '280px'}}>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#4285F4', marginRight: '10px', fontWeight: 'bold'}}>•</span> 48-hour hybrid hackathon
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#EA4335', marginRight: '10px', fontWeight: 'bold'}}>•</span> Open to all college students
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Maximum team size: 3 Members
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#34A853', marginRight: '10px', fontWeight: 'bold'}}>•</span> Inter-College teams allowed
                </li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              padding: 'clamp(20px, 5%, 30px)',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.6) inset',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{height: '4px', width: '60px', background: 'linear-gradient(to right, #EA4335, #FBBC05)', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto'}}></div>
              <h3 style={{fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', marginBottom: '22px', color: '#333', letterSpacing: '0.5px', paddingBottom: '8px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Timeline</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '10px', color: '#333', margin: '0 auto', maxWidth: '280px'}}>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#EA4335', marginRight: '10px', fontWeight: 'bold'}}>•</span> Problem Statements: April 10th, 12:00 AM
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Registration Deadline: April 11th, 12:00 PM
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#34A853', marginRight: '10px', fontWeight: 'bold'}}>•</span> Final Presentation: April 12th, 8:30 AM - 5:00 PM
                </li>
              </ul>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              padding: 'clamp(20px, 5%, 30px)',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.6) inset',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{height: '4px', width: '60px', background: 'linear-gradient(to right, #FBBC05, #4285F4)', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto'}}></div>
              <h3 style={{fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', marginBottom: '22px', color: '#333', letterSpacing: '0.5px', paddingBottom: '8px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Categories</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '10px', color: '#333', margin: '0 auto', maxWidth: '280px'}}>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Code Crafters: First year BTech Students
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 18px)', textAlign: 'left', width: '100%'}}>
                  <span style={{color: '#4285F4', marginRight: '10px', fontWeight: 'bold'}}>•</span> Code Titans: SY, TY and Final year Students
                </li>
              </ul>
            </div>
          </div>
        </main>

      {/* Footer */}
      <footer style={{
        color: 'white',
        textAlign: 'center',
        padding: '25px 0 35px',
        width: '100%',
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        marginTop: '40px',
        borderTop: '1px solid rgba(255,255,255,0.8)',
        boxShadow: '0 -5px 20px rgba(0,0,0,0.05)',
        left: 0,
        right: 0
      }}>
        <p style={{color: '#333', fontWeight: 'bold', fontSize: 'clamp(14px, 2.5vw, 16px)', padding: '0 20px'}}>
          Questions? Contact us at <a href="mailto:dsc@mitaoe.ac.in" style={{color: '#4285F4', textDecoration: 'underline', fontWeight: 'bold'}}>dsc@mitaoe.ac.in</a> | +91 97641 56062
        </p>
      </footer>
    </div>
  );
}

export default App;
