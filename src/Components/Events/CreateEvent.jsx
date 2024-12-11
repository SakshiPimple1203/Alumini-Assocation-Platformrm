import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/events/create', {
        ...formData,
        date: new Date(formData.date).toISOString(), // Format date for backend
      });
      alert('Event created successfully!');
      setFormData({ title: '', description: '', date: '', location: '' });
    } catch (error) {
      console.error('Error creating event:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to create event.');
    }
  };

  // Calculate the minimum date (today)
  const getDateInputRange = () => {
    const currentDate = new Date();
    return currentDate.toISOString().slice(0, 16); // Format to "YYYY-MM-DDTHH:mm"
  };

  const min = getDateInputRange();

  return (
    <div style={styles.container}>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <label>Date:</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={min} // Prevent previous dates
          required
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Event</button>
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

export default CreateEvent;
