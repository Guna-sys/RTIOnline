import 'searchapp.css';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    fromDate: '',
    toDate: '',
    registrationNo: 'GOTPC/R/2025/60114',
    requesterName: '',
    text: '',
    state: 'Tripura',
    status: 'New Request',
    type: 'RTI Request',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rti-portal-root">
      <div className="rti-topbar">
        <span>Skip to main content</span>
        <span className="rti-lang">English ▾</span>
      </div>
      <header className="rti-header">
        <div className="rti-header-top">
          <img src="/emblem.png" alt="National Emblem of India" className="rti-logo" />
          <div className="rti-title-block">
            <h1 className="rti-title">Right to Information Online Portal</h1>
            <p className="rti-subtitle">An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura</p>
          </div>
          <img src="/rti.png" alt="Right to Information Logo" className="rti-logo" />
        </div>
        <nav className="rti-nav">
          <button>HOME</button>
          <button>Application List</button>
          <button>Search Application</button>
          <button>Master Updation</button>
          <button>Change password</button>
          <button>Create/ Deactivate Login</button>
          <button>Logout</button>
        </nav>
      </header>
      <main className="rti-main">
        <div className="rti-welcome">
          <span>Public Authority: Tripura Public Service Commission</span>
        </div>
        <div className="rti-welcome2">
          <span>Welcome to Nodal Officer</span>
          <br />
          <span>Role : Nodal Officer</span>
        </div>
        <section className="rti-search-section">
          <div className="rti-blackbar">Search RTI Request/ First Appeal</div>
          <form className="rti-form-table">
            <div className="rti-form-table-row rti-form-radio-row">
              <div className="rti-form-table-label">Choose RTI Request or First Appeal</div>
              <div className="rti-form-table-input">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="RTI Request"
                    checked={form.type === 'RTI Request'}
                    onChange={handleChange}
                  />
                  RTI Request
                </label>
                <label style={{marginLeft: '16px'}}>
                  <input
                    type="radio"
                    name="type"
                    value="First Appeal"
                    checked={form.type === 'First Appeal'}
                    onChange={handleChange}
                  />
                  First Appeal
                </label>
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">Received Date</div>
              <div className="rti-form-table-input rti-form-date-inputs">
                <span>From :</span>
                <input
                  type="date"
                  name="fromDate"
                  value={form.fromDate}
                  onChange={handleChange}
                />
                <span>To :</span>
                <input
                  type="date"
                  name="toDate"
                  value={form.toDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">Registration No. :</div>
              <div className="rti-form-table-input">
                <input
                  type="text"
                  name="registrationNo"
                  value={form.registrationNo}
                  onChange={handleChange}
                  style={{width: '300px'}}
                />
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">Requester's / Appellant Name :</div>
              <div className="rti-form-table-input">
                <input
                  type="text"
                  name="requesterName"
                  value={form.requesterName}
                  onChange={handleChange}
                  style={{width: '300px'}}
                />
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">Text of RTI Request / Appeal :</div>
              <div className="rti-form-table-input">
                <input
                  type="text"
                  name="text"
                  value={form.text}
                  onChange={handleChange}
                  style={{width: '300px'}}
                />
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">State :</div>
              <div className="rti-form-table-input">
                <select name="state" value={form.state} onChange={handleChange}>
                  <option value="Tripura">Tripura</option>
                </select>
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label">RTI Request/First Appeal Status :</div>
              <div className="rti-form-table-input">
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="New Request">New Request</option>
                </select>
              </div>
            </div>
            <div className="rti-form-table-row">
              <div className="rti-form-table-label"></div>
              <div className="rti-form-table-input">
                <button type="submit" className="rti-search-btn">Search</button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <footer className="rti-footer">
        <div className="rti-footer-content">
          <p>Contents of the portal is provided by Administrative Reforms, Training, Pension and Public Grievances Department, Govt. of Tripura</p>
          <p>Copyright © 2025. All Rights Reserved. This portal is Maintained by Tripura Information Commission and Designed & Developed by National Informatics Centre, Tripura</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
