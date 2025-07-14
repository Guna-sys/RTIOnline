import React from "react";
import PageLayout from "./PageLayout";
import "../style.css";

function RequestList() {
  const data = [
    {
      id: "GORAG/A/2024/1",
      name: "XXXXXX XXXX",
      date: "01/12/2024"
    }
  ];

  return (
    <PageLayout>
      <div className="dashboard-header">
        <p className="welcome-line">Welcome to Appellate Authority Module of RTI-MIS</p>
        <div className="info-row">
          <span className="info-item" id="public-info"><strong>Public Authority:</strong> Agriculture</span>
          <span className="info-item"><strong>Role:</strong> Appellate Authority</span>
          <span className="info-item"><strong>User:</strong> Dr. XXXX XXXX</span>
        </div>
      </div>

      <div className="request-controls">
        <span className="page-number">1</span>
        <select className="dropdown-filter">
          <option>All</option>
        </select>
        <label className="items-label">
          Items per page:
          <select className="items-dropdown">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </label>
      </div>

      <table className="request-table">
        <thead>
          <tr>
            <th style={{ width: "30px" }}></th>
            <th>Registration Number <br />(নিবন্ধন নম্বর)</th>
            <th>Name <br />(নাম)</th>
            <th>Received Date <br />(প্রাপ্তির তারিখ)</th>
            <th style={{ width: "30px" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{item.id}</td>
              <td style={{ color: "red", fontWeight: "bold" }}>{item.name}</td>
              <td>{item.date}</td>
              <td><span role="img" aria-label="attachment">📎</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
}

export default RequestList;
