
function Payment() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Payment Page</h1>
      <h2>Registration Fee ₹99</h2>

<button
  className="pay-btn"
  onClick={() => navigate("/success")}
>
  Pay ₹99 Now
</button>

    </div>
  );
}

export default Payment;

