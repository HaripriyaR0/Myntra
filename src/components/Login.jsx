import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import banner from "../assets/topbanner.jpg";


function Login() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }
    if (!checked) {
      alert("Please accept terms");
      return;
    }
    setStep(2);
  };

  const handleVerify = () => {
    if (otp === "123456") {
      localStorage.setItem("user", mobile);
      navigate("/");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* IMAGE */}
        <img src={banner} alt="banner" className="login-banner" />

        {/* STEP 1 */}
        {step === 1 && (
          <div className="login-body">

            <h3>Login <span>or</span> Signup</h3>

            <div className="mobile-input">
              <span>+91</span>
              <input
                type="text"
                placeholder="Mobile Number*"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="terms">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p>
                By continuing, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b>
              </p>
            </div>

            <button className="login-btn" onClick={handleSendOtp}>
              CONTINUE
            </button>

            <p className="help-text">
              Have trouble logging in? <span>Get help</span>
            </p>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
       <div className="login-body">

  <h3>Verify OTP</h3>
  <p className="otp-info">Sent to +91 {mobile}</p>

  <input
    type="text"
    placeholder="Enter OTP"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
    className="otp-input"
  />

  {error && <p className="error">{error}</p>}

  <button className="login-btn" onClick={handleVerify}>
    VERIFY
  </button>

  {timer > 0 ? (
    <p className="timer">Resend OTP in {timer}s</p>
  ) : (
    <p className="resend" onClick={handleResend}>
      Resend OTP
    </p>
  )}

</div>

        )}

      </div>
    </div>
  );
}

export default Login;
