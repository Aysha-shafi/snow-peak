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
                            href="https://share.google/yQvLqtzDWz7v2XKOY "
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
                </div>

                <div className="reveal">
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
                        <button type="submit" className="form-submit">
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
