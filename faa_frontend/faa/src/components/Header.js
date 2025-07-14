import React from "react";
import { Link } from "react-router-dom";
import nationalEmblem from './National-Emblem.jpg';
import rtionline from './RTI-L.jpg';

function Header({ showNav = true }) {
  return (
    <>
       <div className="top-strip">
       <div className="top-strip-right">
       <span className="skip-link">Skip to main content</span>
       <div className="vertical-divider"></div>
       <div className="language-box">
      🌐
      <select className="language-dropdown">
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="bn">বাংলা</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ml">മലയാളം</option>
      </select>
    </div> 
      </div>
      </div>

      <header className="header">
       <div className="govt-header">
       <div className="left-logos">
       <img src={nationalEmblem} alt="Gov Logo" className="gov-logo" />
       <img src={rtionline}alt="RTI Logo" className="rti-logo" />
       </div>
       <div className="portal-text">
       <h2 className="portal-title">Right to Information Online Portal</h2>
       <p className="portal-subtext">
        An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
      </p>
    </div>

    <div className="header-login">
      <button className="header-login-button">🔒 LOGIN</button>
    </div>
  </div>

  {showNav && (
      
      <nav className="main-nav">
      <ul className="nav-links">
          <li><Link to="/dashboard">HOME</Link></li>
          <li><Link to="/search">SEARCH</Link></li>         
          <li><Link to="/assessment">ASSESSMENT</Link></li> 
          <li><Link to="/reports">REPORTS</Link></li>
          <li><Link to="/utility">UTILITY</Link></li>
          <li><Link to="/">LOGOUT</Link></li>
      </ul>
      </nav>


      )}
</header>

    </>
  );
}
export default Header;