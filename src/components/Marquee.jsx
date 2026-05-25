import { useState, useEffect } from 'react';
import { marqueeItems, brands } from '../content.js';

function Marquee({ variant }) {
  // --- BRAND SLIDER VARIANT ---
  if (variant === 'brands') {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const totalBrands = brands ? brands.length : 0;
    const maxSteps = isDesktop ? totalBrands - 2 : totalBrands;

    useEffect(() => {
      const handleResize = () => {
        const desktopCheck = window.innerWidth > 768;
        setIsDesktop(desktopCheck);
        setCurrentIndex(0);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev >= maxSteps - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));
    };

    useEffect(() => {
      if (totalBrands === 0) return;

      const interval = setInterval(() => {
        nextSlide();
      }, 3500);

      return () => clearInterval(interval);
    }, [currentIndex, maxSteps, totalBrands]);

    return (
      /* Wrapped inside structural project wrapper definitions */
      <div className="products brands-section">

        {/* Correct structure layout added back here */}
        <div className="section-header reveal text-center">
          <div>
            <div className="section-title">Our Leading Brands</div>
          </div>
          <p className="section-para">
            We work with the best paint brands to give your vehicle a perfect finish.
          </p>
        </div>

        <div className="brands-slider-container">
          <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="brands-slider-viewport">
            <div
              className="brands-slider-track"
              style={{
                transform: `translateX(-${currentIndex * (isDesktop ? 33.333 : 100)}%)`
              }}
            >
              {brands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="brand-slide-item">
                  <div className="brand-card">
                    <div className="brand-logo-circle">
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="brand-logo-img"
                        />
                      ) : (
                        brand.name.substring(0, 3).toUpperCase()
                      )}
                    </div>
                    <h3 className="brand-card-title">{brand.name}</h3>
                    <p className="brand-card-desc">{brand.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow right" onClick={nextSlide} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="brands-slider-dots">
          {Array.from({ length: maxSteps }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // --- DEFAULT HOME PAGE RUNNING TEXT BANNER ---
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;