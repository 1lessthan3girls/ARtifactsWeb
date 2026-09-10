import pcmLogo from './media/PCM-logo.jpg';

const footerGroups = [
  {
    heading: 'Project',
    items: [
      { label: 'About', subText: 'ARtifacts is developed in collaboration with Pasig City Museum, in support of the preservation and promotion of local cultural heritage. This project is created for educational purposes by fourth-year students of National University – Manila, as part of their Capstone project titled "AR-tifacts: A Gamified Augmented Reality Platform with 3D Museum Artifacts for Historical and Cultural Preservation." Through this collaboration, the team aims to make Philippine history more accessible, engaging, and memorable for present and future generations.' },
    ],
  },
  {
    heading: 'Address',
    items: [
      { label: 'National University - Manila', subText: '551 M.F. Jhocson St. Sampaloc, Manila, PH 1008' },
    ]
  },
  {
    heading: 'Group',
    items: [
      {
        label: '1lessThan3Girls',
        subText: 'Altares, Beatriz Faye\nCastillo, Marienel\nCortuna, Jhustine\nParaoan, Christian Jake\nPiamonte, Caurie\nSan Juan, Miguel',
      },
    ]
  },
  {
    heading: 'Contact',
    items: [
      { label: '1lessthan3girls@gmail.com', subText: 'Send us a message.' },
    ],
  },
];

function Footer({ backgroundImage, onDownload }) {
  return (
    <section id="contact" className="footer-reveal" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-links">
        <div className="footer-intro">
          <img src={pcmLogo} alt="Pasig City Museum logo" className="footer-museum-logo" />
          <h2>Pasig City Museum</h2>
          <p>Plaza Rizal, Brgy. San Jose, Pasig City</p>
          <p className="museum-description">The Pasig City Museum is an engaging and interactive museum located in Barangay San Jose, Pasig City, in the historic Concepcion Mansion. It was built in 1937 and served as a Japanese detention center during WWII until being acquired in 1980. In 2008, it transformed into a museum with historical artifacts, interactive exhibits, and a venue for cultural events. In 2018, the National Museum of the Philippines declared it as an Important Cultural Property.</p>

        </div>

        <div className="footer-groups">
          {footerGroups.map((group) => (
            <div key={group.heading} className="footer-group">
              <h4>{group.heading}</h4>
              <p>
                {group.items.map((item, index) => (
                  <span key={`${group.heading}-${item.label}`} className="footer-item">
                    {index > 0 && <br />}
                    {item.label === 'Download' ? (
                      <button type="button" className="footer-download" onClick={onDownload}>
                        {item.label}
                      </button>
                    ) : (
                      <span className="footer-item-content">
                        <span>{item.label}</span>
                        <small className={group.heading === 'Project' ? 'footer-description' : undefined}>{item.subText}</small>
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="footer-credits">
        </div>
      </div>
    </section>
  );
}

export default Footer;
