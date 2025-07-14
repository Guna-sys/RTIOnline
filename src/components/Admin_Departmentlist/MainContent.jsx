import React from 'react';
import DataTable from './DataTable';
import './admin_depart_list.css';

function MainContent() {
  return (
    <main id="main-content" className="main-content">
      <div className="section-title">Public Authority: General Administration (AR)</div>
      <div className="welcome">
        <div className="welcome-title">Welcome to Admin Module of RTI-MIS</div>
        <div className="welcome-role">Role : Administrator</div>
        <div className="welcome-user">User : Shri xxxxx xxxx, TSS, Gr-III</div>
      </div>
      <DataTable />
    </main>
  );
}

export default MainContent; 