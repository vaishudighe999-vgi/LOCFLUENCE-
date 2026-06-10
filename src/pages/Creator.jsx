
import { useNavigate } from "react-router-dom";
import "./Creator.css";

function Creator() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="creator-container">
      <div className="creator-card">
        <h1>Creator Registration</h1>
        <p>Join LOCFLUENCE as a Creator</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email" required />

          <input type="password" placeholder="Password" required />

          <input type="tel" placeholder="Mobile Number" required />

          <input type="text" placeholder="City" required />

          <input type="text" placeholder="Instagram Username" />

          <input type="text" placeholder="Facebook Profile" />

          <input type="text" placeholder="YouTube Channel" />

          <select required>
            <option value="">Select Category</option>
            <option>Fashion</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Technology</option>
            <option>Gaming</option>
            <option>Education</option>
            <option>Lifestyle</option>
          </select>

          <button type="submit" className="submit-btn">
            Continue to Payment →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Creator;

