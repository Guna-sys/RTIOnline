import React, { useState } from 'react';
import '../styles/Form.css';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    state: '',
    district: '',
    country: 'India',
    qualification: '',
    phone: '',
    mobile: '',
    email: '',
    citizenship: 'Indian',
    bpl: 'No',
    amount: '₹10',
    concernLife: 'No',
    applicationText: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      {/* -------- Personal Details Section -------- */}
      <div className="section-title">Personal Details:</div>
      <div className="form-group">
        <label>Name: <input name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
        <label>Address: <input name="address" value={formData.address} onChange={handleChange} /></label>
        <label>State: <input name="state" value={formData.state} onChange={handleChange} /></label>
        <label>District: <input name="district" value={formData.district} onChange={handleChange} /></label>
        <label>Country: <input name="country" value={formData.country} readOnly /></label>
        <label>Education Qualification: <input name="qualification" value={formData.qualification} onChange={handleChange} /></label>
        <label>Phone No: <input name="phone" value={formData.phone} onChange={handleChange} /></label>
        <label>Mobile No: <input name="mobile" value={formData.mobile} onChange={handleChange} /></label>
        <label>Email ID: <input name="email" value={formData.email} onChange={handleChange} /></label>
      </div>

      {/* -------- Request Details Section -------- */}
      <div className="section-title">Request Details:</div>
      <div className="form-group">
        <label>Citizenship: <input name="citizenship" value={formData.citizenship} readOnly /></label>
        <label>Is the Requester Below Poverty Line:
          <select name="bpl" value={formData.bpl} onChange={handleChange}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
        <label>Amount Paid: <input name="amount" value={formData.amount} readOnly /></label>
        <label>Does it concern the Life or Liberty of a person:
          <select name="concernLife" value={formData.concernLife} onChange={handleChange}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
        <label>Text of RTI Application:
          <textarea name="applicationText" value={formData.applicationText} onChange={handleChange} />
        </label>
      </div>

      {/* -------- Buttons -------- */}
      <div className="action-buttons">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default RequestForm;
