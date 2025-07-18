import React from 'react';
import './styles/App.css';
import RequestForm from './components/RequestForm';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <h2>Right to Information Online Portal</h2>
          <p>An initiative of Administrative Reforms, Govt. of Tripura</p>
        </div>
        <nav className="navbar">
          <ul>
            <li>HOME</li>
            <li>SEARCH</li>
            <li>ASSESSMENT</li>
            <li>MASTER UPDATION</li>
            <li>UTILITIES</li>
            <li>REPORT</li>
            <li>LOGIN HISTORY</li>
            <li>LOGOUT</li>
          </ul>
        </nav>
      </header>
      <main>
        <h3>Step 4: Request Details</h3>
        <RequestForm />
      </main>
    </div>
  );
}

export default App;
