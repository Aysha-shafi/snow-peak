import { features, aboutStats } from '../content.js';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">

        {/* LEFT CONTENT */}
        <div className="reveal">
          <div className="section-label">About Snow Peak</div>
          <div className="section-title">Crafted for the Passionate</div>

          <p className="about-desc">
            Founded by automotive enthusiasts, Snow Peak Paint Trading LLC has grown into a trusted name among workshops and automotive professionals. We supply high-quality automotive paints and refinishing products designed for durability, performance, and precise colour matching. With a strong focus on consistency and competitive pricing, we help professionals achieve excellent finishing results.
          </p>

          <div>
            {features.map((feature) => (
              <div key={feature} className="feat-row">
                <div className="feat-bullet" />
                <div className="feat-text">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img
            src="img2.png"
            alt="Automotive Paint Work"
          />
        </div>

      </div>

      {/* NEW VISION & MISSION SECTION */}
      <div className="vm-section">

        {/* VISION */}
        <div className="vm-card">
          <img src="vision.png" alt="Vision" />
          <h2>Our Vision</h2>
          <p>
            To establish Snow Peak Paint Trading LLC as a leading provider of automotive and industrial coating solutions across the UAE and GCC. We aim to expand our product range with innovative technologies, build strong partnerships, and create a progressive environment for growth—becoming a preferred name in the coatings industry.</p>
        </div>

        {/* MISSION */}
        <div className="vm-card">
          <img src="mission.png" alt="Mission" />
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality, reliable coating products backed by excellent service and consistent performance. We are committed to continuous improvement and innovation, while offering competitive pricing that delivers real value. Our goal is to meet the evolving needs of professionals with durable finishes, precise colour solutions, and dependable products across automotive and related sectors.          </p>
        </div>

      </div>
    </section>
  );
}



export default About;