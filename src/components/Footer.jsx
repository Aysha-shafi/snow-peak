import { footerLinks } from '../content.js';
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleImageError = (event) => {
    const image = event.currentTarget;
    image.style.display = 'none';
    const next = image.nextElementSibling;
    if (next) next.style.display = 'block';
  };

  const handleLinkClick = (href, event) => {
    event.preventDefault();
    
    // Handle Careers link specially
    if (href === '#careers') {
      navigate('/careers');
      return;
    }

    // For other anchor links
    if (href.startsWith('#')) {
      const id = href.substring(1);
      
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(id);
          if (target) {
            window.scrollTo(0, 0);
            setTimeout(() => {
              target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }, 150);
        return;
      }

      // Already on home page, scroll to section
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div className="footer-social">
          <a
            href="https://instagram.com/snow_peak_paint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={20} />
          </a>

          <a
            href="https://facebook.com/snow_peak_paint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
        </div>
        </div>
        

        <div className="footer-links">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-col">
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a 
                        href={link.href}
                        onClick={(e) => handleLinkClick(link.href, e)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span>{link.label}</span>
                    )}
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
