import React, { useState } from 'react';
import './admin_depart_list.css';

// Simulate 174 department entries with new fields
const initialDepartments = Array.from({ length: 174 }, (_, i) => ({
  sno: i + 1,
  code: (40 + i).toString(),
  name:
    i < 10
      ? [
          'Welfare for OBC',
          'O/o the AE, WR Inv. Sub-Division, Dharmanagar',
          'Office of the BDO, Ambassa RD Block',
          'O/o the AE, WR Sub-Division, Bishalgarh',
          'Commandant, 6th Bn, TSR, (IR-II)',
          'Office of the BDO, Chomunai RD Block',
          'O/o the AE, WR Sub-Division -II, Belonia, South Tripura',
          'Office of the Executive Engineer, RD Santirbazar Division',
          'Superintendent of Police, Gomati',
          'Office of the Chief Engineer, PWD(PMGSY), New Secretariat Building, Agartala',
        ][i]
      : `Department Name ${i + 1}`,
  description: i < 10 ? [
    'Handles OBC welfare schemes',
    'Water resources sub-division office',
    'Block development office',
    'Water resources sub-division office',
    'TSR Commandant office',
    'Block development office',
    'Water resources sub-division office',
    'RD engineering division',
    'Police superintendent office',
    'PWD engineering office',
  ][i] : `Description for Department ${i + 1}`,
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
const STATUS_OPTIONS = ['All', 'Active', 'Inactive'];

function DataTable() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', code: '', description: '' });
  const [formError, setFormError] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'sno', direction: 'asc' });
  const [editModal, setEditModal] = useState({ open: false, dept: null });
  const [editForm, setEditForm] = useState({ name: '', code: '', description: '', status: 'Active' });
  const [editError, setEditError] = useState({});
  const [editSuccess, setEditSuccess] = useState('');
  const [deactivateModal, setDeactivateModal] = useState({ open: false, dept: null });

  // Filtered departments based on search and status
  const filteredDepartments = departments.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.code.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' ? true : d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sorting logic
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
    setCurrentPage(1);
  };

  const sortedDepartments = [...filteredDepartments].sort((a, b) => {
    let aVal = a[sortConfig.key];
    let bVal = b[sortConfig.key];
    if (sortConfig.key === 'sno' || sortConfig.key === 'code') {
      aVal = isNaN(Number(aVal)) ? aVal : Number(aVal);
      bVal = isNaN(Number(bVal)) ? bVal : Number(bVal);
    }
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedDepartments.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const data = sortedDepartments.slice(startIdx, endIdx);

  // Generate page numbers for pagination (show up to 5 pages at a time)
  let pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, 5];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }
  }

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: '' });
    setSuccessMsg('');
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Department Name is required.';
    if (!form.code.trim()) errors.code = 'Department Code is required.';
    if (!form.description.trim()) errors.description = 'Description is required.';
    if (
      form.code.trim() &&
      departments.some((d) => d.code.toLowerCase() === form.code.trim().toLowerCase())
    ) {
      errors.code = 'Department Code must be unique.';
    }
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      setSuccessMsg('');
      return;
    }
    // Add new department to the top
    const newDept = {
      sno: 1,
      name: form.name,
      code: form.code,
      description: form.description,
      status: 'Active',
    };
    const updatedDepartments = [
      newDept,
      ...departments.map((d, idx) => ({ ...d, sno: idx + 2 })),
    ];
    setDepartments(updatedDepartments);
    setShowForm(false);
    setForm({ name: '', code: '', description: '' });
    setFormError({});
    setSuccessMsg('Department added successfully!');
    setCurrentPage(1); // Show the new department on the first page
  };

  // Pagination logic
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  // Helper for sort indicator
  const sortIndicator = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  // Open edit modal and pre-fill data
  const handleEditClick = (dept) => {
    setEditForm({
      name: dept.name,
      code: dept.code,
      description: dept.description,
      status: dept.status,
    });
    setEditError({});
    setEditSuccess('');
    setEditModal({ open: true, dept });
  };

  // Edit form handlers
  const handleEditInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
    setEditError({ ...editError, [e.target.name]: '' });
    setEditSuccess('');
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editForm.name.trim()) errors.name = 'Department Name is required.';
    if (!editForm.description.trim()) errors.description = 'Description is required.';
    if (!editForm.status) errors.status = 'Status is required.';
    return errors;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const errors = validateEditForm();
    if (Object.keys(errors).length > 0) {
      setEditError(errors);
      setEditSuccess('');
      return;
    }
    // Update department in the list
    setDepartments((prev) =>
      prev.map((d) =>
        d.code === editForm.code
          ? { ...d, name: editForm.name, description: editForm.description, status: editForm.status }
          : d
      )
    );
    setEditModal({ open: false, dept: null });
    setEditSuccess('');
    setSuccessMsg('Department updated successfully!');
  };

  // Deactivate handlers
  const handleDeactivateClick = (dept) => {
    setDeactivateModal({ open: true, dept });
  };

  const handleDeactivateConfirm = () => {
    if (!deactivateModal.dept) return;
    setDepartments((prev) =>
      prev.map((d) =>
        d.code === deactivateModal.dept.code ? { ...d, status: 'Inactive' } : d
      )
    );
    setDeactivateModal({ open: false, dept: null });
    setSuccessMsg('Department deactivated successfully!');
  };

  const handleDeactivateCancel = () => {
    setDeactivateModal({ open: false, dept: null });
  };

  return (
    <div className="table-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Departments</div>
        <button className="action-btn edit-btn" onClick={() => setShowForm((v) => !v)}>
          {showForm ? 'Cancel' : 'Add New Department'}
        </button>
      </div>
      {showForm && (
        <form className="add-dept-form" onSubmit={handleFormSubmit} style={{ marginBottom: 20, background: '#f4f8ff', padding: 16, borderRadius: 8, border: '1px solid #cce' }}>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 500 }}>
              Department Name*<br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb' }}
              />
            </label>
            {formError.name && <div style={{ color: '#dc3545', fontSize: 13 }}>{formError.name}</div>}
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 500 }}>
              Department Code*<br />
              <input
                type="text"
                name="code"
                value={form.code}
                onChange={handleInputChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb' }}
              />
            </label>
            {formError.code && <div style={{ color: '#dc3545', fontSize: 13 }}>{formError.code}</div>}
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 500 }}>
              Description*<br />
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                rows={3}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb', resize: 'vertical' }}
              />
            </label>
            {formError.description && <div style={{ color: '#dc3545', fontSize: 13 }}>{formError.description}</div>}
          </div>
          <button className="action-btn edit-btn" type="submit">Submit</button>
        </form>
      )}
      {successMsg && <div style={{ color: '#28a745', fontWeight: 500, marginBottom: 10 }}>{successMsg}</div>}
      <div className="table-controls">
        <label>
          Show
          <select value={pageSize} onChange={handlePageSizeChange} style={{ margin: '0 4px', padding: '2px 6px', background: '#fff', color: 'black' }}>
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          entries
        </label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search by name or code"
            className="table-search"
            value={search}
            onChange={handleSearchChange}
            style={{ minWidth: 180, background: '#fff', color: '#111', border: '1px solid #bbb' }}
          />
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #bbb', background: '#fff', color: '#111' }}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('sno')}>
              S.No.{sortIndicator('sno')}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
              Department Name{sortIndicator('name')}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('code')}>
              Department Code{sortIndicator('code')}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('description')}>
              Description{sortIndicator('description')}
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('status')}>
              Status{sortIndicator('status')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.sno + row.code} className={row.sno % 2 === 0 ? 'even' : ''}>
              <td>{row.sno}</td>
              <td>{row.name}</td>
              <td>{row.code}</td>
              <td>{row.description}</td>
              <td>
                <span className={row.status === 'Active' ? 'status-active' : 'status-inactive'}>
                  {row.status}
                </span>
              </td>
              <td>
                <button className="action-btn edit-btn" onClick={() => handleEditClick(row)}>Edit</button>
                <button
                  className="action-btn deactivate-btn"
                  onClick={() => handleDeactivateClick(row)}
                  disabled={row.status !== 'Active'}
                >
                  Deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>
          Showing {filteredDepartments.length === 0 ? 0 : startIdx + 1} to {Math.min(endIdx, filteredDepartments.length)} of {filteredDepartments.length} entries
        </span>
        <div className="pagination">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          {pageNumbers.map((num) => (
            <button
              key={num}
              className={num === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(num)}
              disabled={num === currentPage}
            >
              {num}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
      </div>
      {/* Edit Modal */}
      {editModal.open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Department</h3>
            <form onSubmit={handleEditSubmit}>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontWeight: 500 }}>
                  Department Name*<br />
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditInputChange}
                    style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb' }}
                  />
                </label>
                {editError.name && <div style={{ color: '#dc3545', fontSize: 13 }}>{editError.name}</div>}
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontWeight: 500 }}>
                  Department Code*<br />
                  <input
                    type="text"
                    name="code"
                    value={editForm.code}
                    readOnly
                    style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb', background: '#eee', color: '#888' }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontWeight: 500 }}>
                  Description*<br />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditInputChange}
                    rows={3}
                    style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb', resize: 'vertical' }}
                  />
                </label>
                {editError.description && <div style={{ color: '#dc3545', fontSize: 13 }}>{editError.description}</div>}
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontWeight: 500 }}>
                  Status*<br />
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditInputChange}
                    style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #bbb', background: '#fff', color: '#111' }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
                {editError.status && <div style={{ color: '#dc3545', fontSize: 13 }}>{editError.status}</div>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                <button type="button" className="action-btn deactivate-btn" onClick={() => setEditModal({ open: false, dept: null })}>Cancel</button>
                <button type="submit" className="action-btn edit-btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Deactivate Modal */}
      {deactivateModal.open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Deactivate Department</h3>
            <p>Are you sure you want to deactivate the department <b>{deactivateModal.dept?.name}</b>?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
              <button type="button" className="action-btn edit-btn" onClick={handleDeactivateCancel}>Cancel</button>
              <button type="button" className="action-btn deactivate-btn" onClick={handleDeactivateConfirm}>Deactivate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable; 