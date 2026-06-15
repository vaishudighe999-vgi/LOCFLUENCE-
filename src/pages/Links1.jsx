import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Links1.css"

function Login() {

  const navigate = useNavigate()

  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState("")

  const sendOTP = () => {
    alert("OTP Sent Successfully")
  }

  const loginUser = () => {

    if (!mobile || !otp) {
      alert("Enter Mobile & OTP")
      return
    }

    navigate("/dashboard")
  }

  return (
    <div className="container">

      <div className="card">

        <h1>LOCFLUENCE</h1>

        <p>
          Creator • Business • Political
        </p>

        <div className="otp-box">

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
          />

          <button
            className="send-btn"
            onClick={sendOTP}
          >
            Send OTP
          </button>

        </div>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={loginUser}
        >
          Login
        </button>

        <div className="or">
          OR
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <div className="signup-links">

          <button
            onClick={() =>
              navigate("/creator")
            }
          >
            Creator Signup
          </button>

          <button
            onClick={() =>
              navigate("/business")
            }
          >
            Business Signup
          </button>

          <button
            onClick={() =>
              navigate("/political")
            }
          >
            Political Signup
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login