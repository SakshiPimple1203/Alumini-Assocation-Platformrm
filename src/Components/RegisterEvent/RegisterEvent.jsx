import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterEvent = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5003/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        alert('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/registrations/register', formData);
      alert('Registered successfully!');
      setFormData({ name: '', email: '', event: '' });
    } catch (error) {
      console.error('Error registering:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to register.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Register for an Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Event:</label>
        <select name="event" value={formData.event} onChange={handleChange} required>
          <option value="">Select an event</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.title} ({new Date(event.date).toLocaleDateString()})
            </option>
          ))}
        </select>
        <button type="submit">Register</button>
      </form>
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
};

export default RegisterEvent;
