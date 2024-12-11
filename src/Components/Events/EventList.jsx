import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  
  // Fetch the events when the component loads
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5003/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Event List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id} style={styles.tr}>
              <td style={styles.td}>{event.title}</td>
              <td style={styles.td}>{event.description}</td>
              <td style={styles.td}>{new Date(event.date).toLocaleString()}</td>
              <td style={styles.td}>{event.location}</td>
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
  heading: {
    textAlign: 'center', // Center the heading
    color: '#3182ce', // Light blue color
    marginBottom: '20px', // Space between heading and table
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse', // Ensures borders between cells are merged
  },
  th: {
    borderBottom: '2px solid #ddd', // Bottom border for headers
    borderRight: '2px solid #ddd',  // Border between columns
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4', // Light background for headers
  },
  td: {
    borderBottom: '1px solid #ddd', // Border between rows
    borderRight: '1px solid #ddd',  // Border between columns
    padding: '8px',
    textAlign: 'left',
  },
  tr: {
    backgroundColor: '#fff',
  },
};

export default EventList;
