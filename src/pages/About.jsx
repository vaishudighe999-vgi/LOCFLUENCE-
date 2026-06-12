import "./About.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState("");

  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="hero2">
        <h1>LOCFLUENCE</h1>

        <p>
          Connecting Local Influencers,
          Businesses & Political Campaigns
        </p>

        <div className="hero-btns">
          <button onClick={() => navigate("/role-selection")}>
            Join Now
          </button>

          <button
            className="outline"
            onClick={() => navigate("/creator")}
          >
            Explore Creators
          </button>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to empower local
          businesses, political campaigns
          and influencers through one
          powerful collaboration platform.
        </p>
      </section>

      {/* Services */}
      <section className="cards">

        <div
          className="card"
          onClick={() => navigate("/creator")}
          style={{ cursor: "pointer" }}
        >
          <h3>👤 Creators</h3>

          <p>
            Find paid collaborations,
            grow your audience and
            earn from your influence.
          </p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/business")}
          style={{ cursor: "pointer" }}
        >
          <h3>🏢 Businesses</h3>

          <p>
            Promote your products and
            services through trusted
            local influencers.
          </p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/political")}
          style={{ cursor: "pointer" }}
        >
          <h3>🗳️ Political</h3>

          <p>
            Reach local audiences,
            increase engagement and
            build stronger campaigns.
          </p>
        </div>

      </section>

      {/* Why Choose */}
      <section className="section">

        <h2>Why Choose LOCFLUENCE?</h2>

        <div className="features">

          <div
            onClick={() =>
              setPopup(
                "All users on LOCFLUENCE are verified for trust and authenticity."
              )
            }
          >
            ✅ Verified Users
          </div>

          <div
            onClick={() =>
              setPopup(
                "Target audiences based on city, district and local area."
              )
            }
          >
            ✅ Local Audience Targeting
          </div>

          <div
            onClick={() =>
              setPopup(
                "Create, manage and track campaigns easily."
              )
            }
          >
            ✅ Easy Campaign Management
          </div>

          <div
            onClick={() =>
              setPopup(
                "Your data and transactions are protected with secure systems."
              )
            }
          >
            ✅ Secure Platform
          </div>

          <div
            onClick={() =>
              setPopup(
                "Promote your brand with budget-friendly marketing solutions."
              )
            }
          >
            ✅ Affordable Promotions
          </div>

          <div
            onClick={() =>
              setPopup(
                "Quickly find creators that match your campaign needs."
              )
            }
          >
            ✅ Fast Creator Discovery
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="stats">

        <div className="stat">
          <h2>500+</h2>
          <p>Influencers</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Businesses</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Political Campaigns</p>
        </div>

        <div className="stat">
          <h2>10K+</h2>
          <p>Audience Reach</p>
        </div>

      </section>

      {/* Vision */}
      <section className="section">

        <h2>Our Vision</h2>

        <p>
          To become India's leading local
          influence marketing and campaign
          management platform.
        </p>

      </section>

      {/* Contact */}
      <section className="contact">

        <h2>Contact Us</h2>

        <p>📧 support@locfluence.com</p>

        <p>📞 +91 XXXXX XXXXX</p>

        <p>📍 Mumbai, Maharashtra</p>

      </section>

      {/* Popup */}
      {popup && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h3>LOCFLUENCE Feature</h3>

            <p>{popup}</p>

            <button onClick={() => setPopup("")}>
              Close
            </button>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>
          "Turning Local Influence Into Real Impact."
        </p>
      </footer>

    </div>
  );
}

export default About;