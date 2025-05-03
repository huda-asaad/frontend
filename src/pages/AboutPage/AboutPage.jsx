import "./AboutPage.css";
import { FaHeadset, FaTools, FaCheckCircle } from "react-icons/fa";

import img2 from "../../assets/images/M.jpeg";
import img3 from "../../assets/images/x.jpeg";
import img4 from "../../assets/images/v.jpeg";
import propertyImage from "../../assets/images/r.jpeg";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <h1>About us</h1>
        <p>Discover Aqar’s vision in delivering top real estate services.</p>
        <div className="about-images-row">
          
          <img src={img2} alt="Team 2" />
          <img src={img3} alt="Team 3" />
          <img src={img4} alt="Team 4" />
        </div>
      </section>

      {/* Split Content */}
      <section className="about-split">
        <img src={propertyImage} alt="Property" />
        <div className="about-text">
          <h2>Why Aqar?</h2>
          <p>
            Aqar offers high-quality properties across the region. Our team works hard to ensure client satisfaction,
            trust, and value. Whether you're buying, selling, or renting, we’re with you every step of the way.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <h2>Why People Trust Aqar</h2>
        <div className="feature-cards">
          <div className="feature">
            <FaHeadset className="icon" />
            <h3>Excellent Support</h3>
            <p>Always available to help with your inquiries.</p>
          </div>
          <div className="feature">
            <FaTools className="icon" />
            <h3>Strong Construction</h3>
            <p>We prioritize durability and premium materials.</p>
          </div>
          <div className="feature">
            <FaCheckCircle className="icon" />
            <h3>Top Quality</h3>
            <p>Every property is verified for top-tier standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
