import { useState } from 'react';
import { contactInfo } from '../content.js';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const phoneNumber = "971507840351";

        const emoji = encodeURIComponent("👋");
        const text = `Hello 


I would like to enquire about your automotive paint services.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || "Not specified"}

Message:
${formData.message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${emoji}%20${encodeURIComponent(text)}`;

        window.open(whatsappURL, "_blank");
    };
    return (
        <section id="contact" className="contact">
            <div className="section-header reveal">
                <div>
                    <div className="section-label">Get In Touch</div>
                    <div className="section-title">Let's Talk Paint</div>
                </div>
                <p className="section-sub">Request a quote, place a bulk order, or ask our technical team anything.</p>
            </div>

            <div className="contact-grid">
                <div className="reveal">
                    <div className="info-label">📍 Address</div>
                    <div className="info-val">
                        <a
                            href="https://share.google/9Ev684Mwj8qvK6H9q  "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Snowpeak Paint Trading L L C <br />
                            Al Qusais Industrial Area 4, <br />
                            Dubai - United Arab Emirates
                        </a>
                    </div>

                    <div className="info-label">📞 Phone</div>
                    <div className="info-val">
                        <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>

                    <div className="info-label">📩 Email</div>
                    <div className="info-val">
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>

                    <div className="info-label">⏰ Working Hours</div>
                    <div className="info-val">{contactInfo.hours}</div>

                    {/* GOOGLE MAP EMBED BLOCK */}
                    <div className="map-container" style={{ marginTop: '24px' }}>
                        <iframe
                            title="Snow Peak Paint Trading LLC"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8142385108044!2d55.38814757626297!3d25.27681492842037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c165d4bb3bf%3A0x6b245037d4bc972e!2sAl+Qusais+Industrial+Area+4+-+Dubai!5e0!3m2!1sen!2sae!4v1716662400000!5m2!1sen!2sae"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ marginTop: '8px' }}>
                            <a
                                href="https://maps.google.com/?q=Snow+Peak+Paint+Trading+LLC+Speedex+Center+Building+Al+Qusais"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-map-link">
                                📍 View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="reveal form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                className="form-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <input
                            className="form-input"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject / Product Enquiry"
                        />
                        <textarea
                            className="form-input"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            required
                        />
                        <button type="submit" className="form-submit" >
                            Send Enquiry
                        </button>
                        <div className={`form-success${success ? ' visible' : ''}`}>
                            ✓ Thank you! We will get back to you shortly.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
