import React, { useState } from 'react';
import axios from 'axios';
import './ProfileForm.css'; // Import the CSS file for styling
import Sidebar from '../Slidebar/Slidebar'; // Import Sidebar component

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        yearOfPassing: '',
        branch: '',
        presentCompany: '',
        presentLocation: '',
        email: '',
        presentRole: '',
        presentTechnicalWork: '',
        pastCompanies: [],
    });

    const handleChange = (e, index = null) => {
        const { name, value } = e.target;

        if (index !== null) {
            // Handle past company data
            const updatedPastCompanies = [...formData.pastCompanies];
            updatedPastCompanies[index][name] = value;
            setFormData({ ...formData, pastCompanies: updatedPastCompanies });
        } else {
            // Handle regular fields
            setFormData({ ...formData, [name]: value });
        }
    };

    const addPastCompany = () => {
        setFormData({
            ...formData,
            pastCompanies: [
                ...formData.pastCompanies,
                { companyName: '', location: '', role: '', technicalWork: '' },
            ],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/profiles', formData);
            alert('Profile Created');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="profile-form-container">
            {/* Render Sidebar */}
            <Sidebar />

            <form onSubmit={handleSubmit}>
                {/* Heading for Create Profile */}
                <h1>Create Profile</h1>

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Year of Passing:</label>
                    <input
                        type="number"
                        name="yearOfPassing"
                        placeholder="Enter your year of passing"
                        value={formData.yearOfPassing}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Branch:</label>
                    <input
                        type="text"
                        name="branch"
                        placeholder="Enter your branch"
                        value={formData.branch}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Present Company:</label>
                    <input
                        type="text"
                        name="presentCompany"
                        placeholder="Enter your present company"
                        value={formData.presentCompany}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Present Location:</label>
                    <input
                        type="text"
                        name="presentLocation"
                        placeholder="Enter your present location"
                        value={formData.presentLocation}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email ID:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Present Role:</label>
                    <input
                        type="text"
                        name="presentRole"
                        placeholder="Enter your present role"
                        value={formData.presentRole}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Present Technical Work:</label>
                    <input
                        type="text"
                        name="presentTechnicalWork"
                        placeholder="Describe your present technical work"
                        value={formData.presentTechnicalWork}
                        onChange={handleChange}
                    />
                </div>

                {/* Past Companies Fields */}
                <div>
                    <h3>Past Experience</h3>
                    {formData.pastCompanies.map((company, index) => (
                        <div key={index} className="past-company">
                            <div>
                                <label>Past Company Name:</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Enter past company name"
                                    value={company.companyName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>

                            <div>
                                <label>Past Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter past location"
                                    value={company.location}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>

                            <div>
                                <label>Past Role:</label>
                                <input
                                    type="text"
                                    name="role"
                                    placeholder="Enter past role"
                                    value={company.role}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>

                            <div>
                                <label>Past Technical Work:</label>
                                <input
                                    type="text"
                                    name="technicalWork"
                                    placeholder="Describe past technical work"
                                    value={company.technicalWork}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addPastCompany}>
                        Add More Past Experience
                    </button>
                </div>

                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default ProfileForm;
