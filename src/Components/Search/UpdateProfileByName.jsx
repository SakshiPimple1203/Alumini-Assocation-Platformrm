import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfileByName = () => {
    const [name, setName] = useState('');
    const [presentCompany, setPresentCompany] = useState('');
    const [presentLocation, setPresentLocation] = useState('');
    const [presentTechnicalWork, setPresentTechnicalWork] = useState('');
    const [presentRole, setPresentRole] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await axios.put('http://localhost:4000/profiles/update-by-name', {
                name,
                presentCompany,
                presentLocation,
                presentTechnicalWork,
                presentRole,
            });
            setResponseMessage(`Profile updated successfully: ${response.data.name}`);
        } catch (error) {
            setResponseMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <h1>Update Profile by Name</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Present Company:</label>
                <input
                    type="text"
                    placeholder="Enter present company"
                    value={presentCompany}
                    onChange={(e) => setPresentCompany(e.target.value)}
                />
            </div>
            <div>
                <label>Present Location:</label>
                <input
                    type="text"
                    placeholder="Enter present location"
                    value={presentLocation}
                    onChange={(e) => setPresentLocation(e.target.value)}
                />
            </div>
            <div>
                <label>Present Technical Work:</label>
                <input
                    type="text"
                    placeholder="Enter present technical work"
                    value={presentTechnicalWork}
                    onChange={(e) => setPresentTechnicalWork(e.target.value)}
                />
            </div>
            <div>
                <label>Present Role:</label>
                <input
                    type="text"
                    placeholder="Enter present role"
                    value={presentRole}
                    onChange={(e) => setPresentRole(e.target.value)}
                />
            </div>
            <button onClick={handleUpdate}>Update Profile</button>

            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default UpdateProfileByName;
