import React, { useState } from 'react';
import axios from 'axios';

const JobSearch = () => {
    const [search, setSearch] = useState({
        title: '',
        description: '',
        location: '',
        company: '',
    });
    const [searchResults, setSearchResults] = useState([]);

    // Handle search form input changes
    const handleSearchChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    // Handle search submission
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams(search);
            const res = await axios.get(`http://localhost:8000/api/jobs/search?${params.toString()}`);
            setSearchResults(res.data);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch jobs');
        }
    };

    return (
        <div>
            <h1>Search Jobs</h1>
            <form onSubmit={handleSearch}>
                <input
                    name="title"
                    value={search.title}
                    placeholder="Search by Title"
                    onChange={handleSearchChange}
                />
                <input
                    name="description"
                    value={search.description}
                    placeholder="Search by Description"
                    onChange={handleSearchChange}
                />
                <input
                    name="location"
                    value={search.location}
                    placeholder="Search by Location"
                    onChange={handleSearchChange}
                />
                <input
                    name="company"
                    value={search.company}
                    placeholder="Search by Company"
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            {/* Display Search Results */}
            <div>
                {searchResults.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Title</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Description</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Location</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Company</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Posted By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((job) => (
                                <tr key={job._id}>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.title}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.description}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.location}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.company}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.alumni}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default JobSearch;
