import React, { useEffect, useState } from 'react';
import '../components/AdminLogin.css';

function AdminLogin() {
  const [captcha, setCaptcha] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaInput: ''
  });

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.captchaInput) {
      alert('All fields are required!');
      return;
    }

    if (formData.captchaInput !== captcha) {
      alert('Captcha incorrect! Please try again.');
      generateCaptcha();
      setFormData((prev) => ({ ...prev, captchaInput: '' }));
      return;
    }

    alert('Login successful (demo).');
    // Redirect or API call logic here
  };

  const handleForgotPassword = () => {
    alert('Password reset functionality will be added here.');
  };

  return (
    <div className="admin-body">
      <header className="header">
        <div className="logo-section">
          <div className="logo">RTI</div>
          <div className="title-section">
            <div className="main-title">Right to Information Online Portal</div>
            <div className="subtitle">
              An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
            </div>
          </div>
        </div>
        <button className="login-btn">
          <span className="login-icon"></span> LOGIN
        </button>
      </header>

      <main className="main-content">
        <div className="login-panel">
          <h2 className="login-title">Official Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-icon user-icon"></span>
              <input
                type="text"
                name="username"
                className="input-field"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-icon lock-icon"></span>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="captcha-section">
              <div className="captcha-container">
                <div className="captcha-image">{captcha}</div>
                <button type="button" className="refresh-btn" onClick={generateCaptcha}>Refresh</button>
              </div>
              <input
                type="text"
                name="captchaInput"
                className="captcha-input"
                placeholder="Enter Captcha Code"
                value={formData.captchaInput}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-submit">LOGIN</button>

            <div className="forgot-password">
              <a href="#" onClick={handleForgotPassword}>
                Forgot Password? Click Here to Reset
              </a>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          Contents of this portal is provided by Administrative Reforms, Training, Pension and Public Grievances Department, Govt. of Tripura
        </div>
        <div>
          Copyright ©️ 2025, All Rights Reserved. This portal is Maintained by Tripura Information Commission
          and Designed & Developed by National Informatics Centre, Tripura
        </div>
      </footer>
    </div>
  );
}

export default AdminLogin;
