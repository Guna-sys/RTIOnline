
import React from "react";
import PageLayout from "./PageLayout";
import "../style.css";

function Dashboard() {
  return (
    <PageLayout>
     <div className="dashboard-header">
  <p className="welcome-line">
    Welcome to Appellate Authority Module of RTI-MIS
  </p>
  <div className="info-row">
    <span className="info-item" id="public-info"><strong>Public Authority:</strong> Agriculture</span>
    <span className="info-item"><strong>Role:</strong> Appellate Authority</span>
    <span className="info-item"><strong>User:</strong> Dr. XXXX XXXX</span>
  </div>
</div>



      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon">📩</div>
          <div className="card-content">
            <p className="card-title">Appeal Pending &lt;=10 Days</p>
            <p className="card-number">10</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📩</div>
          <div className="card-content">
            <p className="card-title">New Appeal(s)</p>
            <p className="card-number">12</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📩</div>
          <div className="card-content">
            <p className="card-title">Appeal Under Process</p>
            <p className="card-number">5</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
