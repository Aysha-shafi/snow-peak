import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
function JobDetails() {
    const { id } = useParams();
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleApplyClick = () => {
        setShowForm(true);

        setTimeout(() => {
            window.scrollTo({
                top: formRef.current.offsetTop - 120, // adjust for navbar height
                behavior: "smooth",
            });
        }, 100);
    };
    const jobs = {
        1: {
            title: "Sales Executive",
            details: "Full Time | Dubai | 1-3 Years Experience",
            description:
                "We are looking for a motivated Sales Executive to promote our automotive, marine, industrial and aircraft coating solutions.",

            responsibilities: [
                "Generate new business opportunities and leads.",
                "Visit customers, workshops, and industrial clients.",
                "Prepare quotations and follow up on enquiries.",
                "Build and maintain strong customer relationships.",
                "Achieve monthly and annual sales targets.",
                "Promote automotive, marine, industrial, and aircraft coating products."
            ],

            requirements: [
                "1–3 years of sales experience.",
                "Knowledge of paints, coatings, or related products is preferred.",
                "Strong communication and negotiation skills.",
                "Ability to work independently and meet targets.",
                "Valid UAE driving licence is an advantage.",
                "Good customer service and relationship management skills."
            ],

            benefits: [
                "Competitive salary and performance incentives.",
                "Career growth and professional development opportunities.",
                "Friendly and supportive work environment.",
                "Work with leading international paint and coating brands.",
                "Opportunity to contribute to a growing company in Dubai."
            ]
        },

        2: {
            title: "Store Assistant",
            details: "Full Time | Dubai | 0-2 Years Experience",
            description:
                "We are looking for a responsible Store Assistant to support daily store operations, manage inventory, and assist customers in selecting the right paint and coating products.",

            responsibilities: [
                "Receive, inspect, and organize incoming stock.",
                "Maintain accurate inventory records.",
                "Assist customers with product enquiries and purchases.",
                "Prepare and pack orders for delivery.",
                "Keep the store clean, organized, and well-stocked.",
                "Support stock audits and inventory checks."
            ],

            requirements: [
                "0–2 years of experience in store operations or inventory management.",
                "Basic knowledge of inventory handling and stock control.",
                "Good communication and customer service skills.",
                "Ability to lift and organize products when required.",
                "Attention to detail and organizational skills.",
                "Basic computer knowledge is preferred."
            ],

            benefits: [
                "Stable full-time employment.",
                "Opportunities for career growth and skill development.",
                "Supportive and friendly work environment.",
                "Work with premium paint and coating brands.",
                "Be part of a growing and dynamic company."
            ]
        }
    };

    const job = jobs[id];

    return (
        <section className="job-details-page">

            <div className="job-details-card">

                <div className="job-header">

                    <div>
                        <h1>{job.title}</h1>
                        <p>{job.details}</p>
                    </div>

                    <button
                        className="apply-btn"
                        onClick={handleApplyClick}
                    >
                        Apply
                    </button>

                </div>

                <h2>Job Description</h2>

                <p>{job.description}</p>

                <h2>Key Responsibilities</h2>

                <ul className="job-list">
                    {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2>Requirements</h2>

                <ul className="job-list">
                    {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2>Why Join Us?</h2>

                <ul className="job-list">
                    {job.benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

            {showForm && (
                <div className="application-section" ref={formRef}>

                    <div className="application-left">
                        <h2>
                            Join our team and build the future with us.
                        </h2>
                    </div>

                    <div className="application-right">

                        <form
                            action="https://formsubmit.co/snowpeakpaint@gmail.com"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            {/* Optional settings */}
                            <input type="hidden" name="_subject" value="New Job Application - Sales Executive" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="form-grid">

                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name*"
                                    required
                                />

                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone*"
                                    required
                                    minLength="8"
                                    maxLength="15"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    required
                                />

                                <input
                                    type="text"
                                    name="position"
                                    value={job.title}
                                    readOnly
                                />

                                <select
                                    name="experience"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Experience*
                                    </option>
                                    <option>0-1 Years</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>5+ Years</option>
                                </select>

                            </div>

                            <input
                                type="file"
                                name="attachment"
                                accept=".pdf,.doc,.docx"
                                className="resume-upload"
                                required
                            />

                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
            )}

        </section>
    );
}

export default JobDetails;  