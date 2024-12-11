import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobPortal = () => {
    // State for the form and job list
    const [job, setJob] = useState({
        title: '',
        description: '',
        location: '',
        company: '',
        alumni: '',
    });
    const [jobs, setJobs] = useState([]);

    // Fetch jobs from the backend
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get('http://localhost:6000/api/jobs');
                setJobs(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchJobs();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/jobs', job);
            alert('Job posted successfully');
            // Update the job list after posting
            const res = await axios.get('http://localhost:8000/api/jobs');
            setJobs(res.data);
            // Reset the form
            setJob({
                title: '',
                description: '',
                location: '',
                company: '',
                alumni: '',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to post job');
        }
    };

    return (
        <div>
            <h1>Job Portal</h1>

            {/* Job Form */}
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={job.title}
                    placeholder="Job Title"
                    onChange={handleChange}
                />
                <input
                    name="description"
                    value={job.description}
                    placeholder="Description"
                    onChange={handleChange}
                />
                <input
                    name="location"
                    value={job.location}
                    placeholder="Location"
                    onChange={handleChange}
                />
                <input
                    name="company"
                    value={job.company}
                    placeholder="Company"
                    onChange={handleChange}
                />
                <input
                    name="alumni"
                    value={job.alumni}
                    placeholder="Alumni Name"
                    onChange={handleChange}
                />
                <button type="submit">Post Job</button>
            </form>

            {/* Job List */}
            <div>
                {jobs.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Location</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Posted By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id}>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{job.title}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{job.description}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{job.location}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{job.company}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{job.alumni}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No jobs available.</p>
                )}
            </div>
        </div>
    );
};

export default JobPortal;
