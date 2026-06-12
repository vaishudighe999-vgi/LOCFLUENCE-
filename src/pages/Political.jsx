import { useState } from "react"
import "./Political.css"

function Political() {

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    partyName: "",
    designation: "",
    state: "",
    district: "",
    constituency: "",
    campaignType: "",
    budget: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    alert("Political Registration Successful ✅")
  }

  return (
    <div className="political-container">

      <div className="political-card">

        <h1>Political Signup</h1>
        <p>Create your political campaign account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
            type="text"
            name="partyName"
            placeholder="Political Party / Organization"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="constituency"
            placeholder="Constituency / Ward"
            onChange={handleChange}
            required
          />

          <select
            name="campaignType"
            onChange={handleChange}
            required
          >
            <option value="">
              Select Campaign Type
            </option>

            <option>
              Election Campaign
            </option>

            <option>
              Public Awareness
            </option>

            <option>
              Event Promotion
            </option>

            <option>
              Government Scheme Promotion
            </option>
          </select>

          <input
            type="number"
            name="budget"
            placeholder="Promotion Budget"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register Account
          </button>

        </form>

      </div>

    </div>
  )
}

export default Political