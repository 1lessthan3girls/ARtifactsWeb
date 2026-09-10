import { handleDownload } from '../script.js';
import pcmBackground from './media/pcmBackground.jpg';
import pcmBackground2 from './media/pcmBackground_2.png';
import pcmBackground4 from './media/pcmBackground_4.jpg';
import mutyaPcm from './media/mutya_pcm.jpg';
import arLogo from './media/AR-logo.png';
import artifactsLogo from './media/ARtifactsLogo2.png';
import ScreenPreview1 from './App_Screens/HomeScreen.jpg';
import ScreenPreview2 from './App_Screens/ExhibitCollectionSceen.jpg';
import Footer from './Footer';
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Download', href: '#download' },
];

const featureCards = [
  {
    title: 'App Feature',
    text: 'Explore curated artifacts, immersive stories, and personalized tours.',
  },
  {
    title: 'Mobile Ready',
    text: 'Designed for mobile and desktop with smooth scrolling and easy navigation.',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <img src={arLogo} alt="ARtifacts Nav Logo" className="NavLogo" />
        <nav>
          {navItems.map((item) => (
            item.label === 'Download' ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload();
                }}
              >
                {item.label}
              </a>
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            )
          ))}
        </nav>
      </header>

      <main className="homeBG" id="home">
        <section id="home" className="hero-section image-section" style={{ backgroundImage: `url(${pcmBackground})` }}>
          <div className="hero-sticky">
            <div className="hero hero-content">
              <img src={artifactsLogo} alt="ARtifacts Logo" className="logoHeader" />
              {/* <h1>ARtifacts</h1> */}
              <p className="textHome">Step into Pasig City Museum's collection in AR-tifacts. Explore, inspect, and piece back together real 3D artifacts anytime, anywhere, right from your phone.</p>
              <a className="btn" href="#download" onClick={(e) => { e.preventDefault(); handleDownload(); }}>
                Download
              </a>
              
            </div>
          </div>
        </section>
       

        <section id="about" className="about-background image-section" style={{ backgroundImage: `url(${pcmBackground4})` }}>
          <div className="content-block">
            <img src={ScreenPreview1} alt="App Preview" />
            <div className="content-block-copy">
              <h2>Project Introduction</h2>
              <p> </p>
            </div>
          </div>
          <div className="content-block2">
            <div className="content-block-copy2">
              <h2>Project Introduction</h2>
              <p> </p>
            </div>
            <img src={ScreenPreview2} alt="App Preview" />
          </div>
        </section>

        <section className="feature-background image-section" style={{ backgroundImage: `url(${pcmBackground2})` }}>
          <div className="feature-grid">
            {featureCards.map((card) => (
              <div key={card.title} className="feature-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer backgroundImage={mutyaPcm} onDownload={handleDownload} />
      </main>
    </>
  );
}

export default App;
