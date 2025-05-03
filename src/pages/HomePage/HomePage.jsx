// src/pages/HomePage/HomePage.jsx
import "./HomePage.css";
import heroImage from "../../assets/images/88.jpeg";
import CountUp from "react-countup";
import aboutImage from "../../assets/images/h.jpeg";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Top Real Estate with Aqar</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2>Aqar by the Numbers</h2>
        <div className="stats-cards">
          <div className="card">
            <h3><CountUp end={12345} duration={3} /></h3>
            <p>Website Visitors</p>
          </div>
          <div className="card">
            <h3><CountUp end={478} duration={2.5} /></h3>
            <p>Properties Sold</p>
          </div>
          <div className="card">
            <h3><CountUp end={856} duration={2} /></h3>
            <p>Villas & Apartments Listed</p>
          </div>
        </div>
      </section>
      <section className="about-section">
  <div className="about-container">
        <img
        src={aboutImage}
        alt="Aqar Office"
        className="about-image"
        />
        <div className="about-text">
        {/* <h2>Why Choose Aqar?</h2> */}
        <p>
            Aqar is your trusted partner in real estate, offering a wide range of premium properties across the region.
            With a strong focus on quality, transparency, and customer satisfaction, we help buyers and sellers find the
            perfect match. Whether you're looking to invest, sell, or discover your dream home, Aqar is here to guide you
            every step of the way.
        </p>
        </div>
    </div>
    </section>

    </>
  );
}
