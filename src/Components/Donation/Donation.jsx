import React, { useState } from 'react';
import axios from 'axios';
import '../Donation/Donation.css';

const Donation = () => {
    const [formData, setFormData] = useState({
        donorName: '',
        email: '',
        amount: 0,
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/donations', formData);
            alert('Donation submitted successfully:', response.data);
        } catch (err) {
        alert.error('Error in donation submission:', err.response?.data || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Donation</h1>
            <input type="text" name="donorName" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="number" name="amount" placeholder="Amount" onChange={handleChange} />
            <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
            <button type="submit">Donate</button>
        </form>
    );
};

export default Donation;
// use donationPortal
// show collections
// db.donations.find().pretty()