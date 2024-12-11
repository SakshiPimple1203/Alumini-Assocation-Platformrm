import React, { useState } from 'react';
import axios from 'axios';

const AddStory = () => {
    const [story, setStory] = useState({
        name: '',
        yearOfPassing: '',
        branch: '',
        achievement: '',
        contribution: '',
    });

    const handleChange = (e) => {
        setStory({ ...story, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/api/stories', story);
            alert('Story added successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to add story');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="yearOfPassing" placeholder="Year of Passing" onChange={handleChange} />
            <input name="branch" placeholder="Branch" onChange={handleChange} />
            <textarea name="achievement" placeholder="Achievement" onChange={handleChange}></textarea>
            <textarea name="contribution" placeholder="Contribution" onChange={handleChange}></textarea>
            <button type="submit">Add Story</button>
        </form>
    );
};

export default AddStory;
