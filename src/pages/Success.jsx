import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>🎉 Registration Successful</h1>

      <p>
        Thank you for joining LOCFLUENCE.
        Your payment has been received successfully.
      </p>

      <p>
        Your profile is now under admin verification.
        You will be notified once approved.
      </p>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Success;