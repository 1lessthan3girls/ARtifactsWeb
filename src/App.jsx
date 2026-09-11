import { handleDownload } from '../script.js';
import pcmBackground from './media/pcmBackground.jpg';
import pcmBackground2 from './media/pcmBackground_2.png';
import pcmBackground4 from './media/pcmBackground_4.jpg';
import mutyaPcm from './media/mutya_pcm.jpg';
import arLogo from './media/AR-logo.png';
import artifactsLogo from './media/ARtifactsLogo2.png';
import ScreenPreview1 from './App_Screens/HomeScreen.jpg';
import ScreenPreview2 from './App_Screens/ExhibitCollectionSceen.jpg';
import ArtifactsInfoScreen from './App_Screens/ArtifactsInfoScreen.jpg';
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
    text: "View real museum artifacts in AR, explore their curated history and audio narration, then test what you've learned through a hands-on reconstruction game.",
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
              <p className="textHome">Step into Pasig City Museum's collection in ARtifacts. Explore, inspect, and piece back together real 3D artifacts anytime, anywhere, right from your phone.</p>
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
              <p>ARtifacts lets visitors explore museum artifacts the way a physical gallery visit would — grouped into curated exhibits, each with historical background and context, so every piece is understood within its own place in history. From there, visitors can view artifacts in augmented reality, listen to audio narration, and test their understanding through a hands-on reconstruction game, turning passive browsing into active learning. </p>
            </div>
          </div>
          <div className="content-block2">
            <div className="content-block-copy2">
              <h2>Exhibits</h2>
              <p>Artifacts are organized into curated exhibits, each grounded in its own historical period and background. This gives visitors context alongside the object itself, helping them understand not just what a piece is, but the story and era it belongs to.</p>
            </div>
            <img src={ScreenPreview2} alt="App Preview" />
          </div>
        </section>

        <section className="feature-background image-section" style={{ backgroundImage: `url(${pcmBackground2})` }}>
          <img className="feature-preview" src={ArtifactsInfoScreen} alt="Artifact information screen preview" />
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
