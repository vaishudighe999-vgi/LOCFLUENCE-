import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Get in touch with our team.
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>📧 support@locfluence.com</p>

            <p>📞 +91 XXXXX XXXXX</p>

            <p>📍 Pune, Maharashtra, India</p>

            <p>
              We help creators, businesses, and political campaigns
              connect through powerful local collaborations.
            </p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />
<input
  type="tel"
  placeholder="Mobile Number"
  maxLength="10"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }}
  required
/>            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;