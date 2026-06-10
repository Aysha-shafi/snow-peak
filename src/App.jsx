import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Routes, Route, useLocation } from 'react-router-dom';
import Careers from './pages/Careers.jsx';
import JobDetails from './pages/JobDetails.jsx';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Products from './components/Products.jsx';
import About from './components/About.jsx';

import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // Remove 'visible' class from all reveal elements when route changes
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => el.classList.remove('visible'));
  }, [location.pathname]);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 80 * (Array.from(entry.target.parentNode.children).indexOf(entry.target) % 4));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = sections[0]?.id || '';

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar activeSection={activeSection} />

            <main>
              <Hero />
              <Marquee />
              <Products />
              <About />
              <Contact />

              <a
                href="https://wa.me/971507840351"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </main>

            <Footer />
          </>
        }
      />

      <Route
        path="/careers"
        element={
          <>
            <Navbar />
            <Careers />
            <Footer />
          </>
        }
      />

      <Route
        path="/careers/:id"
        element={
          <>
            <Navbar />
            <JobDetails />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
