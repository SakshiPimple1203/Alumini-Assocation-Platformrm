import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisteredUsers = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5003/registrations');
        console.log('Fetched registrations:', response.data);
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching registered users:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Registered Users</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Event</th>
            <th style={styles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration._id}>
              <td style={styles.td}>{registration.name}</td>
              <td style={styles.td}>{registration.email}</td>
              <td style={styles.td}>{registration.event?.title || 'No Event Title'}</td>
              <td style={styles.td}>
                {registration.event?.date
                  ? new Date(registration.event.date).toLocaleDateString()
                  : 'No Date'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate', // Changed to 'separate' for visible borders
    borderSpacing: '0', // Removes gaps between borders
  },
  th: {
    border: '1px solid #000', // Add solid black borders for clearer separation
    padding: '8px',
    background: '#f4f4f4',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #000', // Add solid black borders for clearer separation
    padding: '8px',
    textAlign: 'left',
  },
};

export default RegisteredUsers;
