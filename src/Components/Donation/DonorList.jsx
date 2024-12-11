import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Donation/DonorList.css';

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/donations');
                setDonors(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching donors:', err);
                setLoading(false);
            }
        };

        fetchDonors();
    }, []);

    if (loading) {
        return <p>Loading donors...</p>;
    }

    return (
        <div className="donor-list">
            <h1>List of Donors</h1>
            {donors.length === 0 ? (
                <p>No donations found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((donor) => (
                            <tr key={donor._id}>
                                <td>{donor.donorName}</td>
                                <td>{donor.email}</td>
                                <td>₹{donor.amount}</td>
                                <td>{donor.message || 'N/A'}</td>
                                <td>{new Date(donor.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DonorList;
