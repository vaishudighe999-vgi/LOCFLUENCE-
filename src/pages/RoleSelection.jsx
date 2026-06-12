import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-container">

      <div className="role-content">
        <h1>Select Your Role</h1>
        <p>
          Choose how you want to join LOCFLUENCE
        </p>

        <div className="role-grid">

          <div
            className="role-card"
            onClick={() => navigate("/creator")}
          >
            <h2>👤 Creator</h2>
            <p>
              Collaborate with brands and grow your audience.
            </p>
          </div>

          <div
            className="role-card"
            onClick={() => navigate("/business")}
          >
            <h2>🏢 Business</h2>
            <p>
              Promote your products through local influencers.
            </p>
          </div>

          <div
            className="role-card"
            onClick={() => navigate("/political")}
          >
            <h2>🗳️ Political Campaign</h2>
            <p>
              Reach local voters and build strong campaigns.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default RoleSelection;