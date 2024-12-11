import React, { useState } from 'react';
import axios from 'axios';

const SearchProfiles = () => {
    const [searchFields, setSearchFields] = useState({
        name: '',
        presentLocation: '',
        presentCompany: '',
        presentTechnicalWork: '',
        yearOfPassing: '',
        branch: '',
    });
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); // To track if search was performed

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchFields((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = async () => {
        try {
            const queryParams = new URLSearchParams(searchFields).toString();
            const response = await axios.get(`http://localhost:4000/profiles/search?${queryParams}`);
            setResults(response.data);
            setHasSearched(true); // Set search as performed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Search Profiles</h1>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={searchFields.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="presentLocation"
                    placeholder="Present Location"
                    value={searchFields.presentLocation}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="presentCompany"
                    placeholder="Present Company"
                    value={searchFields.presentCompany}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="presentTechnicalWork"
                    placeholder="Present Technical Work"
                    value={searchFields.presentTechnicalWork}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="yearOfPassing"
                    placeholder="Year of Passing"
                    value={searchFields.yearOfPassing}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    value={searchFields.branch}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {hasSearched && results.length === 0 && (
                <div style={styles.noResults}>No results found.</div>
            )}

            {results.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Year of Passing</th>
                                <th style={styles.th}>Branch</th>
                                <th style={styles.th}>Present Company</th>
                                <th style={styles.th}>Present Location</th>
                                <th style={styles.th}>Email ID</th>
                                <th style={styles.th}>Present Role</th>
                                <th style={styles.th}>Present Technical Work</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((profile) => (
                                <tr key={profile._id}>
                                    <td style={styles.td}>{profile.name}</td>
                                    <td style={styles.td}>{profile.yearOfPassing}</td>
                                    <td style={styles.td}>{profile.branch}</td>
                                    <td style={styles.td}>{profile.presentCompany}</td>
                                    <td style={styles.td}>{profile.presentLocation}</td>
                                    <td style={styles.td}>{profile.email}</td>
                                    <td style={styles.td}>{profile.presentRole}</td>
                                    <td style={styles.td}>{profile.presentTechnicalWork}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    th: {
        border: '1px solid #ccc',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'left',
    },
    td: {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'left',
    },
    noResults: {
        marginTop: '20px',
        color: 'red',
        fontWeight: 'bold',
    },
};

export default SearchProfiles;