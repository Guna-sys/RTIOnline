import React, { useState, useEffect } from 'react';
import '../components/AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [error, setError] = useState('');

  // Generate new captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha(); // generate once when page loads
  }, []);

  const handleLogin = () => {
    if (!username || !password || !inputCaptcha) {
      setError('Please fill in all fields.');
      return;
    }

    if (inputCaptcha !== captcha) {
      setError('Incorrect captcha. Please try again.');
      generateCaptcha();
      setInputCaptcha('');
      return;
    }

    // Simulated login action
    setError('');
    alert('Login successful (demo)');
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2 className="login-title">Official Login - Admin Portal</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group captcha-group">
          <label>Captcha</label>
          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button type="button" onClick={generateCaptcha} className="refresh-btn">↻</button>
          </div>
          <input
            type="text"
            placeholder="Enter captcha shown above"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>

        <div className="forgot-section">
          <p>
            Forgot Password? <a href="#">Click here to reset</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
