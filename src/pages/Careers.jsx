import { Link } from "react-router-dom";
import { useEffect } from "react";

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="careers-page">
            <div className="careers-header">
                <h1>Careers</h1>
                <p>We're always on the lookout for passionate individuals.</p>
            </div>

            <div className="careers-banner">
                <img src="/career.png" alt="Careers" />
            </div>

            <div className="career-openings">
                <h2>Current Openings</h2>

                <div className="job-card">
                    <div>
                        <h3>Sales Executive</h3>
                        <p>Full Time | Dubai | 1-3 years</p>
                        <p>
                            Looking for energetic sales professionals with experience in
                            paints, coatings, or industrial supplies.
                        </p>
                    </div>

                    <Link to="/careers/1" className="apply-btn">
                        Apply
                    </Link>
                </div>

                <div className="job-card">
                    <div>
                        <h3>Store Assistant</h3>
                        <p>Full Time | Dubai | 0-2 years</p>
                        <p>
                            Responsible for inventory management and customer support.
                        </p>
                    </div>

                    <Link to="/careers/2" className="apply-btn">
                        Apply
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Careers;