import { useState, useEffect } from "react";

const slides = [
    {
        image: "/slide1.png",
        position: "center",

        badge: "Automotive Refinishing Specialists",

        title: "Quality From",
        highlight: "Start to Finish",

        desc: "High-quality automotive paints and refinishing products trusted for consistent performance and durability."
    },

    {
        image: "/slide2.png",
        position: "center",
        badge: "Premium Automotive Paints",
        title: "Advanced",
        highlight: "Coatings",
        desc: "Engineered for durability, color retention, and superior finish across all applications."
    },

    {
        image: "/slide3.png",
        position: "center",
        badge: "Trusted Worldwide",
        title: "Built For",
        highlight: "Professionals",
        desc: "Used by workshops, detailers, and refinishing experts across industries."
    }
];

function Hero() {
    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setIndex((index + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + slides.length) % slides.length);
    };

    return (
        <section id="home" className="hero-slider">

            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`slide ${i === index ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="overlay" />

                    <div className="hero-content">
                        <div className="hero-badge">{slide.badge}</div>
                        <h1>
                            {slide.title} <span className="accent">{slide.highlight}</span>
                        </h1>

                        <p className="hero-desc">{slide.desc}</p>

                        <button
                            className="btn-primary"
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>

            {/* Dots */}
            <div className="dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "dot active" : "dot"}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;