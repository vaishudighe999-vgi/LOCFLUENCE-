import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaBuilding, FaBullhorn } from "react-icons/fa";
import "./home.css";function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>LOCFLUENCE</h1>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <button
            className="login-nav-btn"
            onClick={() => navigate("/links1")}
          >
            Log in
          </button>

<button
  className="hero-start-btn"
  onClick={() => navigate("/role-selection")}
>
  Get Started →
</button>        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            India's Hyper-Local
            <br />
            Influencer Marketplace
          </h1>

          <p className="hero-text">
            LOCFLUENCE connects local creators, businesses,
            and political campaigns on one powerful digital
            platform. Find the right influencers for your
            brand, business, or campaign — right in your city.
          </p>

          <div className="hero-buttons">
<button
  className="hero-start-btn"
  onClick={() => navigate("/role-selection")}
>
  Get Started →
</button>
            <button className="hero-learn-btn">
              Learn More
            </button>
          </div>
        </div>
      </section>

{/* Communities Section */}
<section className="communities-section">
  <div className="communities-header">
    <h2>Built for Three Communities</h2>

    <p>
      Whether you create content, run a business, or lead a political campaign —
      <br />
      LOCFLUENCE has the tools to connect you with the right audience.
    </p>
  </div>

  <div className="cards-container">

{/* Creators */}
<div
  className="community-card"
  onClick={() => navigate("/creator")}
>
  <div className="icon-box">
    <FaUsers />
  </div>

  <h3>Creators</h3>

  <p>
    Showcase your social media presence across Instagram,
    Facebook, YouTube, and more. Get discovered by local
    businesses and campaigns looking for influencers in
    your niche and city.
  </p>

  <ul>
    <li>✓ Build your creator profile</li>
    <li>✓ Get matched with campaigns</li>
    <li>✓ Earn from promotions</li>
  </ul>
</div>

{/* Businesses */}
<div
  className="community-card"
  onClick={() => navigate("/business")}
>
  <div className="icon-box">
    <FaBuilding />
  </div>

  <h3>Businesses</h3>

  <p>
    Find the perfect local influencers to promote your
    brand. From restaurants to real estate, connect with
    creators who speak to your target audience in your city.
  </p>

  <ul>
    <li>✓ Browse creator profiles</li>
    <li>✓ Set promotion budgets</li>
    <li>✓ Track campaign results</li>
  </ul>
</div>

{/* Political */}
<div
  className="community-card"
  onClick={() => navigate("/political")}
>
  <div className="icon-box">
    <FaBullhorn />
  </div>

  <h3>Political Campaigns</h3>

  <p>
    Amplify your campaign reach with hyper-local influencers.
    Connect with creators who understand your constituency
    and can deliver your message effectively.
  </p>

  <ul>
    <li>✓ Target by constituency</li>
    <li>✓ Booth-level campaigns</li>
    <li>✓ Social media promotions</li>
  </ul>
</div>
</div>
</section>

      {/* How It Works Section */}
      <div className="how-section">
        <div className="how-header">
          <h2 className="how">How It Works</h2>

          <p>
            Simple, transparent, and effective.
            Get started in minutes.
          </p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Register</h3>

            <p>
              Sign up as a Creator, Business, or 
              Political user. Choose your role and 
              fill in your details.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Pay ₹99</h3>

            <p className="p">
              Complete a one-time registration fee of
               ₹90 to activate your account on the
                platform.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Get Verified</h3>

            <p>
              Our admin team reviews and approves
               your profile to ensure quality and 
               authenticity.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h3>Start Matching</h3>

            <p>
              Browse, connect, and collaborate.our
               matching system finds the perfect
              partners for you.
            </p>
          </div>
        </div>
      </div>  
      
      {/* CTA Section */}
<section className="cta-section">
  <div className="cta-content">
    <h2>Ready to Connect Locally?</h2>

    <p>
      Join India's growing hyper-local influencer marketplace.
      Whether you are a creator looking for opportunities,
      a business seeking promotions, or a campaign team
      building reach — LOCFLUENCE is your platform.
    </p>

<button
  className="cta-btn"
  onClick={() => navigate("/role-selection")}
>
  Join LOCFLUENCE →
</button>
  </div>
</section>

{/* Footer */}
<footer className="footer">
  <div className="footer-container">

    <div className="footer-column">
  <h2>LOCFLUENCE</h2>
      <p>
        India's hyper-local influencer
        marketplace. Connecting creators,
        businesses, and political campaigns.
      </p>
    </div>

<div className="footer-column">
  <h3>Platform</h3>

  <Link to="/about">About Us</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/getstarted">Get Started</Link>
</div>

<div className="footer-column">
  <h3>For Users</h3>

  <Link to="/creator">Creators</Link>
  <Link to="/business">Businesses</Link>
  <Link to="/political">Political Campaigns</Link>
</div>

<div className="footer-column">
  <h3>Company</h3>

  <Link to="/avoxior">AVOXIOR GROUP</Link>
  <Link to="/careers">Careers</Link>
  <Link to="/privacy">Privacy Policy</Link>
</div>
  </div>

  <hr />

  <div className="footer-bottom">
    © 2026 LOCFLUENCE by AVOXIOR GROUP. All rights reserved.
  </div>
</footer>
        </>
  );
}

export default Home;