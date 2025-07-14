import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function LoginPage() {
  const navigate = useNavigate();
  const [captchaText, setCaptchaText] = useState("");

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <PageLayout noNav={true}>
      <h2 className="official-heading">Official Login</h2>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
        <span className="input-icon blue-bg">👤</span>
        <input type="text" placeholder="Enter Username" required />
        </div>
        <div className="input-group">
        <span className="input-icon blue-bg">🔑</span>
        <input type="password" placeholder="Enter Password" required />
        </div>

          <div className="captcha-box">
            <div className="captcha-img">
              <span className="captcha-text">{captchaText}</span>
            </div>
            <button type="button" className="refresh-button" onClick={refreshCaptcha}>
              ↻ Refresh
            </button>
          </div>
          <input type="text" placeholder="Enter Captcha Code" required className="captcha-input" />
          <button type="submit" className="login-button full-width">LOGIN</button>
          <p className="forgot-link">Forgot Password? <a href="#">Click Here to Reset</a></p>
        </form>
      </div>
    </PageLayout>
  );
}

export default LoginPage;