import { useEffect, useRef } from 'react';
import { setupScrollAnimation, handleDownload } from '../script.js';
import pcmBackground from './media/pcmBackground.jpg';
import pcmBackground2 from './media/pcmBackground_2.png';
import pcmBackground4 from './media/pcmBackground_4.jpg';
import mutyaPcm from './media/mutya_pcm.jpg';
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
  const homeSectionRef = useRef(null);
  const homeImageRef = useRef(null);

  useEffect(() => {
    const removeScrollAnimation = setupScrollAnimation();

    const updateHomeZoom = () => {
      const section = homeSectionRef.current;
      const image = homeImageRef.current;

      if (!section || !image) return;

      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / (section.offsetHeight - window.innerHeight))
      );
      image.style.transform = `scale(${1 + progress * 0.28})`;
    };

    updateHomeZoom();
    window.addEventListener('scroll', updateHomeZoom, { passive: true });
    window.addEventListener('resize', updateHomeZoom);

    return () => {
      removeScrollAnimation();
      window.removeEventListener('scroll', updateHomeZoom);
      window.removeEventListener('resize', updateHomeZoom);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <img src="src/media/AR-logo.png" alt="ARtifacts Nav Logo" className="NavLogo" />
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
        <section ref={homeSectionRef} className="hero-section">
          <div className="hero-sticky">
            <div className="hero-background">
              <img ref={homeImageRef} src={pcmBackground} alt="" aria-hidden="true" />
            </div>
            <div className="hero hero-content">
              <img src="src/media/ARtifactsLogo2.png" alt="ARtifacts Logo" className="logoHeader" />
              <p className="textHome">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="btn" href="#download" onClick={(e) => { e.preventDefault(); handleDownload(); }}>
                Download
              </a>
              
            </div>
          </div>
        </section>
       

        <section className="about-background image-section" style={{ backgroundImage: `url(${pcmBackground4})` }}>
          <div className="content-block" id="about">
            <img src="src/media/screenPlaceholder1.png" alt="App Preview" />
            <div className="content-block-copy">
              <h2>Project Introduction</h2>
              <p>AR-tifacts is an application that presents museum artifacts through augmented reality. Users can point a phone at a flat surface to view historical and cultural objects in three dimensions. The objects appear at true scale and can be viewed from every angle. This method allows learners, students, and history enthusiasts to study artifacts without visiting a physical museum.</p>
            </div>
          </div>
        </section>

        <section className="feature-background image-section">
          <div className="hero-background2">
            <img src={pcmBackground2} alt="" aria-hidden="true" />
          </div>
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
