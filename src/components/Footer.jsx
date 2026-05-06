import { footerLinks } from '../content.js';

function Footer() {
  const handleImageError = (event) => {
    const image = event.currentTarget;
    image.style.display = 'none';
    const next = image.nextElementSibling;
    if (next) next.style.display = 'block';
  };

  return (
    <footer>
      <div className="footer-top">
        <div>
          <img
            className="footer-logo-img"
            src="/snowpeaklogo.png"
            alt="Snow Peak Paint Trading LLC"
            onError={handleImageError}
          />
          <span className="logo-text footer-logo-text">
            Snow <span className="logo-accent">Peak</span>
          </span>
          <div className="footer-tagline">Premium Automotive Paint Systems</div>
        </div>

        <div className="footer-links">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-col">
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Snow Peak Paint Trading LLC. All rights reserved.</div>
        <div className="footer-copy">Privacy Policy · Terms of Use</div>
      </div>
    </footer>
  );
}

export default Footer;
