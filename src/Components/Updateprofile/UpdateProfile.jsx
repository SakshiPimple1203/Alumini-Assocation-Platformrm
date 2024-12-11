import React, { useState } from 'react';
import './UpdateProfile.css'; // Optional for custom styles
// import Navbar from '../Navbar/Navbar'; // Ensure Navbar is imported

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    city: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Profile Updated:', formData);
    // You might want to display a success message or redirect here
  };

  return (
    <div>
      {/* <Navbar /> Navbar is placed here to be visible */}
      <div className="update-profile-container">
        <div className="update-profile-content">
          <h2>Update Profile</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
