import React, { useEffect, useState } from 'react';
import './App.css'; // You can extract table-specific CSS later if needed
import './App.jsx';


function DepartmentList() {
const user = {
    name: "Shri xxxxxxx",
    role: "Administrator",
    dept: "General Administration (AR)",
    designation: "TSS, Gr-III"
  };

  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState('');

  // Placeholder department data — replace with API call later
  const dummyData = [
    { code: '40', name: 'Welfare for OBC' },
    { code: '166', name: 'O/o the AE, WR Inv. Sub-Division, Dharmanagar' },
    { code: '122', name: 'Office of the BDO, Ambassa RD Block' },
    { code: '148', name: 'O/o the AE, WR Sub-Division, Bishalgarh' },
    { code: '80', name: 'Commandant, 6th Bn, TSR, (IR-III)' },
    { code: '127', name: 'Office of the BDO, Chhamanu RD Block' },
    { code: '156', name: 'O/o the AE, WR Sub-Division -II, Belonia, South Tripura'},
    { code: '129', name: 'Office of the Executive Engineer, RD Santirbazar Division'},
    { code: '92', name: 'Superintendent of Police, Gomati' },
    { code: '70', name: 'Office of the Chief Engineer, PWD(PMGSY), Agartala' },
    
  ];

  useEffect(() => {
    setDepartments(dummyData);
  }, []);

  const filteredDepartments = departments.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="department-page">
      {/*  Fixed navbar */}
      <nav className="navbar a">

        <button>HOME</button>
        <button>CREATE DEPARTMENT</button>
        <button>CREATE NODAL OFFICER</button>
        <button>CREATE SPIO</button>
        <button>CREATE FAA</button>
      </nav>

      {/*  Fixed role-info */}
      <div className="role-info ">
         <p1><strong>Welcome to Admin Module of RTI-MIS</strong><br /></p1>
        <p><strong>Public Authority: {user.dept}</strong></p>
        <p><strong>Role: {user.role}</strong></p>
        <p><strong>User: {user.name}, {user.designation}</strong></p>
      </div>

    
    <div className="department-list-container">
      <div className="table-controls">
        <label>
          Show
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries
        </label>

        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="dept-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Department Code</th>
            <th>Department Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredDepartments.map((dept, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{dept.code}</td>
              <td>{dept.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled>First</button>
        <button disabled>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
    </div>
  );
}

export default DepartmentList;
