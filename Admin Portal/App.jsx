import './App.css';
import { useState, useEffect } from 'react';
import userIcon from './Emblem_of_India.svg';
import lockIcon from './icons8-lock.svg';
import RTI from './RIGHT_TO_INFORMATION_LOGO_23.svg';
import User from './user-svgrepo-com.svg';
import password from './key-svgrepo-com.svg';
import Dashboard from './Dashboard';
import DepartmentList from './DepartmentList'; 


function App() {
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [page, setPage] = useState('dashboard'); //  Controls page after login
  

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let captchaText = '';
    for (let i = 0; i < 5; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
    setUserCaptcha('');
    setError('');
  };


  useEffect(() => {
    generateCaptcha();
  }, []);


  const handleLogin = async () => {
    if (userCaptcha.toUpperCase() === captcha.toUpperCase()) {
      const data = await fetchUserData();
      setUserData(data);
      setIsLoggedIn(true);
    } else {
      setError('Captcha does not match. Please try again.');
      generateCaptcha();
    }
  };

  const fetchUserData = async () => {
    const data = {
      name: "Shri xxxxxxx",
      role: "Administrator",
      dept: "General Administration (AR)",
      designation: "TSS, Gr-III"
    };
    return data;
  };

  return (
    <div className="page">
      <header className="top-bar">
        <div className="left">
          <img src={userIcon} alt="Emblem" width="35px" />
          <img src={RTI} alt="RTI" width="100px" />
        </div>
        <div className="Center">
          <div className="logo-text">Right to Information Online Portal</div>
          <div className="subtext">
            An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
          </div>
        </div>
        <div className="right">
          <button className="login-btn">
            <img src={lockIcon} alt="Lock" width="12px" /> LOGIN
          </button>
        </div>
      </header>

      {/*  Page switching logic */}
      {isLoggedIn ? (
        page === 'dashboard' ? (
          <Dashboard user={userData} goToDepartmentList={() => setPage('department')} />
        ) : (
          <DepartmentList />
        )
      ) : (

        <main className="main-content">
          <div className="first">
            <h2>Official Login</h2>
          </div>

          <div className="login-box">
            <div className="input-group">
              <div className="one" id="a">
                <img src={User} alt="user" width="20px" />
              </div>
              <input type="text" placeholder="Enter Username" />
            </div>

            <div className="input-group">
              <div className="one">
                <img src={password} alt="lock" width="20px" />
              </div>
              <input type="password" placeholder="Enter Password" />
            </div>

            <div className="captcha-img">
              <div className="captcha-box">{captcha}</div>
              <button className="refresh-btn" onClick={generateCaptcha}>&#x21bb; Refresh</button>
            </div>

            <div className="captcha-input-group">
              <input
                type="text"
                placeholder="Enter Captcha Code"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
              />
            </div>

            {error && <div className="error-msg">{error}</div>}

            <button className="submit-btn" onClick={handleLogin}>LOGIN</button>
            <div className="reset-link">Forgot Password? <a href="#">Click Here to Reset</a></div>
          </div>
        </main>
      )}

      <footer className="footer">
        <p>Contents of the portal is provided by Administrative Reforms, Training, Pension and Public Grievances Department, Govt. of Tripura</p>
        <p>Copyright © 2025. All Rights Reserved. This portal is Maintained by Tripura Information Commission
          and Designed & Developed by National Informatics Centre, Tripura</p>
      </footer>
    </div>
  );
}

export default App;
