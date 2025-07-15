import React from 'react';
import '../components/AdminDashboard.css';

function AdminDashboard({ username = "SHRI ADMIN" }) {
  const rtiRequests = [
    { id: 1, applicant: "Raj Mehta", status: "New", submittedOn: "2025-07-12" },
    { id: 2, applicant: "Pooja Das", status: "Under Process", submittedOn: "2025-07-10" },
    { id: 3, applicant: "Amit Roy", status: "Under Process", submittedOn: "2025-07-08" },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">PUBLIC AUTHORITY: Tripura Public Service Commission</div>
        <div className="header-center">
          Welcome to Admin Module of RTI-MIS<br />
          ROLE: ADMIN
        </div>
        <div className="header-right">USER: {username}</div>
      </header>

      {/* Summary Cards */}
      <section className="dashboard-summary">
        <div className="summary-card">
          <div className="icon">📩</div>
          <h3>Pending for Disposal</h3>
          <p className="value">4</p>
        </div>
        <div className="summary-card">
          <div className="icon">📥</div>
          <h3>RTI Requests</h3>
          <p className="sub-value">New: <span>3</span></p>
          <p className="sub-value">Under Process: <span>6</span></p>
        </div>
        <div className="summary-card">
          <div className="icon">📨</div>
          <h3>Appeals</h3>
          <p className="sub-value">Raised: <span>6</span></p>
          <p className="sub-value">Disposed: <span>7</span></p>
        </div>
      </section>

      {/* RTI Requests Table */}
      <section className="dashboard-section">
        <h2>Recent RTI Requests</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant</th>
              <th>Status</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {rtiRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.applicant}</td>
                <td>{req.status}</td>
                <td>{req.submittedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Placeholder Sections */}
      <section className="dashboard-section">
        <h2>Other Admin Modules</h2>
        <ul>
          <li>✔ Department List</li>
          <li>✔ SPIO List</li>
          <li>✔ FAA List</li>
          <li>✔ Nodal Officer List</li>
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
