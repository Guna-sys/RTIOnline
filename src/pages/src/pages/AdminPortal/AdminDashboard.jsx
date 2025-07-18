import React, { useState } from 'react';
import '../components/AdminDashboard.css';

const navItems = [
  "HOME",
  "CREATE DEPARTMENT",
  "CREATE NODAL OFFICER",
  "CREATE SPIO",
  "CREATE FAA",
];

const statCards = [
  {
    type: "dual",
    icon: "📄",
    stats: [
      { label: "Total Request(s)", value: 2447 },
      { label: "Disposed Off", value: 1500, className: "disposed" },
    ],
  },
  {
    type: "dual",
    icon: "📄",
    stats: [
      { label: "Total Appeal(s)", value: 1000 },
      { label: "Disposed Off", value: 456, className: "disposed" },
    ],
  },
  {
    type: "single",
    icon: "📄",
    label: "Departments Onboarded",
    value: 15,
  },
  {
    type: "single",
    icon: "📄",
    label: "Total Nodal Officer",
    value: 15,
  },
  {
    type: "single",
    icon: "📄",
    label: "Total SPIO",
    value: 15,
  },
  {
    type: "single",
    icon: "📄",
    label: "Total First Appellate Authority",
    value: 15,
  },
];

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("HOME");

  const handleNavClick = (label) => {
    setActiveTab(label);
    if (label !== "HOME") {
      alert(`${label} functionality would be implemented here.`);
    }
  };

  const handleCardClick = (label) => {
    alert(`Detailed view for ${label} would be implemented here.`);
  };

  return (
    <div className="admin-body">
      {/* Header */}
      <div className="header">
        <div className="logo-section">
          <div className="logo">RTI</div>
          <div className="title-section">
            <div className="main-title">Right to Information Online Portal</div>
            <div className="subtitle">
              An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
            </div>
          </div>
        </div>
        <button className="login-btn"><span className="login-icon"></span>LOGIN</button>
      </div>

      {/* Navigation */}
      <div className="navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${activeTab === item ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Admin Info */}
      <div className="admin-info">
        <div className="welcome-text">Welcome to Admin Module of RTI-MIS</div>
        <div className="user-info">
          <div className="user-detail"><strong>Public Authority:</strong> General Administration (AR)</div>
          <div className="user-detail"><strong>Role:</strong> Administrator</div>
          <div className="user-detail"><strong>User:</strong> Shri xxxxx xxxx, TSS, Gr-III</div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="dashboard-content">
        <div className="stats-grid">
          {statCards.map((card, idx) => (
            <div className="stat-card" key={idx} onClick={() => handleCardClick(card.label || card.stats[0].label)}>
              <div className="stat-icon"><span className="document-icon"></span></div>
              <div className="stat-content">
                {card.type === "dual" ? (
                  <div className="stat-values">
                    {card.stats.map((stat, i) => (
                      <div className="stat-item" key={i}>
                        <div className="stat-label">{stat.label}</div>
                        <div className={`stat-number ${stat.className || ""}`}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="single-stat">
                    <div className="stat-number">{card.value}</div>
                    <div className="stat-label">{card.label}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          Contents of this portal is provided by Administrative Reforms, Training, Pension and Public Grievances Department, Govt. of Tripura
        </div>
        <div>
          Copyright ©️ 2025, All Rights Reserved.
          Maintained by Tripura Information Commission | Designed & Developed by NIC Tripura
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
