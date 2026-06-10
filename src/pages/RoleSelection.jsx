import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <h1>Select Your Role</h1>

      <div
        className="role-card"
        onClick={() => navigate("/creator")}
      >
        Creator
      </div>

      <div
        className="role-card"
        onClick={() => navigate("/business")}
      >
        Business
      </div>

      <div
        className="role-card"
        onClick={() => navigate("/political")}
      >
        Political Campaign
      </div>
    </div>
  );
}

export default RoleSelection;