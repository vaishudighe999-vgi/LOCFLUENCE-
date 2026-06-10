import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Business.css";

function BusinessSignup() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    businessType: "",
    promotionType: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);

      // Payment Page
      navigate("/payment");
    }, 2000);
  };

  return (
    <div className="signup-container">

      {showPopup && (
        <div className="popup">
          Registration Successful ✓
        </div>
      )}

      <form
        className="signup-form"
        onSubmit={handleSubmit}
      >
        <h2>Business Registration</h2>

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />

        <select
          name="businessType"
          onChange={handleChange}
          required
        >
          <option value="">
            Select Business Type
          </option>
          <option value="Shop">Shop</option>
          <option value="Service">Service</option>
          <option value="Brand">Brand</option>
          <option value="Startup">Startup</option>
        </select>

        <select
          name="promotionType"
          onChange={handleChange}
          required
        >
          <option value="">
            Select Promotion Type
          </option>

          <option value="Instagram Promotion">
            Instagram Promotion
          </option>

          <option value="Facebook Promotion">
            Facebook Promotion
          </option>

          <option value="Video Promotion">
            Video Promotion
          </option>

          <option value="Local Campaign">
            Local Campaign
          </option>

          <option value="Influencer Marketing">
            Influencer Marketing
          </option>
        </select>

        <input
          type="number"
          name="budget"
          placeholder="Promotion Budget (₹)"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Continue to Payment →
        </button>
      </form>
    </div>
  );
}

export default BusinessSignup;