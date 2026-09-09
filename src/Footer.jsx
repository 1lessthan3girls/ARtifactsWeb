const footerGroups = [
  {
    heading: 'Project',
    items: [
      { label: 'About', subText: 'This project is in collaboration with Pasig City Museum for the preservation and promotion of local cultural heritage.' },
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
    <section className="footer-reveal" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-links" id="contact">
        <div className="footer-intro">
          <h2>Footer</h2>
          <p>Learn more about the project, the people behind it, and how to get in touch.</p>
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
                        <small>{item.subText}</small>
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="footer-credits">
          Made with care by 1lessThan3Girls. Licensed under the MIT License.
        </div>
      </div>
    </section>
  );
}

export default Footer;
