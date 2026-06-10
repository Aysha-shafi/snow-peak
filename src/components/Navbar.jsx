import { useState, useEffect } from 'react';
import { navLinks } from '../content.js';
import { Phone, Mail } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
const scrollToSection = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth' });
};

function Navbar({ activeSection }) {
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavClick = (id) => {
        // Careers page
        if (id === "careers") {
            navigate("/careers");
            return;
        }

        // If not on home page, go home first
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
            setTimeout(() => {
                const target = document.getElementById(id);
                if (target) {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            }, 150);

            return;
        }

        // Already on home page
        scrollToSection(id);
    };
    const [mobileOpen, setMobileOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleImageError = (event) => {
        const image = event.currentTarget;
        image.style.display = 'none';
        const next = image.nextElementSibling;
        if (next) next.style.display = 'block';
    };

    return (
        <>
            <nav>
                <img
                    className="logo-img"
                    src="/snowpeaklogo.png"
                    alt="Snow Peak Paint Trading LLC"
                    onError={handleImageError}
                />
                <span className="logo-text">
                    Snow <span className="logo-accent">Peak</span>
                </span>

                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            {link.id === "careers" ? (
                                <Link to="/careers">
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    href={`#${link.id}`}
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavClick(link.id);
                                    }}
                                >
                                    {link.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="nav-contact">
                    <a href="tel:+971507840351" className="nav-phone">
                        <Phone size={16} /> +971 507840351
                    </a>
                    <a href="mailto:snowpeakpaint@gmail.com" className="nav-email">
                        <Mail size={16} /> snowpeakpaint@gmail.com
                    </a>
                </div>

                <button
                    className={`hamburger ${mobileOpen ? 'active' : ''}`}
                    aria-label="Menu"
                    onClick={() => setMobileOpen((current) => !current)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
                {navLinks.map((link) =>
                    link.id === "careers" ? (
                        <Link
                            key={link.id}
                            to="/careers"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavClick(link.id);
                                setMobileOpen(false);
                            }}
                        >
                            {link.label}
                        </a>
                    )
                )}


            </div>
        </>
    );
}

export default Navbar;
