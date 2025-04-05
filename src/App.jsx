import bgImage from './assets/websiteBackground.png';
import gdgLogo from './assets/GDG_logo.png';
import nirmaanLogo from './assets/middleLogo.png';
import './index.css';

function App() {
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
        padding: '20px',
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
        margin: '20px auto',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
        width: '100%'
      }}>

          <div style={{
            maxWidth: '350px',
            margin: '0 auto 30px auto',
            width: '90%',
            animation: 'glow 3s infinite alternate',
            paddingTop: '10px'
          }}>
            <img 
              src={nirmaanLogo} 
              alt="Nirmaan Logo" 
              style={{width: '100%', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.6))'}} 
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
            padding: '20px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.8)',
            width: 'calc(100% - 40px)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '24px',
              color: '#333',
              fontWeight: 'bold',
              lineHeight: 1.6
            }}>
              Nirmaan 2025, the 3rd Edition of our flagship hackathon, is a 48-hour hybrid competition
              open to all skill levels.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              marginTop: '30px',
              width: '100%',
              padding: '0 10px'
            }}>
              <a 
                href="/Nexus of Evolution (2).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#4285F4',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px)',
                  borderRadius: '50px',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
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
                Download Brochure
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYaDYEiCb4vv5E87HxAYEiaTb_0OEnIHEGdyfiIBgJlfc5xg/viewform?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'white',
                  color: '#333',
                  fontWeight: 'bold',
                  padding: 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px)',
                  borderRadius: '50px',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  margin: '0',
                  boxShadow: '0 10px 25px rgba(234, 67, 53, 0.5)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  whiteSpace: 'nowrap'
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
                Register Now
              </a>
            </div>
          </div>

          {/* Key Information */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '40px auto 50px', width: '100%', padding: '0 20px'}}>
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
              <h3 style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 'bold', marginBottom: '20px', color: '#333', letterSpacing: '0.5px', paddingBottom: '5px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Event Format</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '15px', color: '#333'}}>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#4285F4', marginRight: '10px', fontWeight: 'bold'}}>•</span> 48-hour hybrid hackathon
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#EA4335', marginRight: '10px', fontWeight: 'bold'}}>•</span> Open to all college students
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Maximum team size: 3 Members
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
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
              <h3 style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 'bold', marginBottom: '20px', color: '#333', letterSpacing: '0.5px', paddingBottom: '5px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Timeline</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '15px', color: '#333'}}>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#EA4335', marginRight: '10px', fontWeight: 'bold'}}>•</span> Problem Statements: April 10th, 12:00 AM
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Registration Deadline: April 11th, 12:00 PM
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
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
              <h3 style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 'bold', marginBottom: '20px', color: '#333', letterSpacing: '0.5px', paddingBottom: '5px', borderBottom: '2px solid rgba(0,0,0,0.05)'}}>Categories</h3>
              <ul style={{textAlign: 'left', listStyleType: 'none', paddingLeft: '15px', color: '#333'}}>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
                  <span style={{color: '#FBBC05', marginRight: '10px', fontWeight: 'bold'}}>•</span> Code Crafters: First year BTech Students
                </li>
                <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontWeight: '500', fontSize: 'clamp(14px, 2.5vw, 16px)'}}>
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
