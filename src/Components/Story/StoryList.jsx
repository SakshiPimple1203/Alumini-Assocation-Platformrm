import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoryList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const res = await axios.get('http://localhost:7000/api/stories');
                setStories(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStories();
    }, []);

    return (
        <div>
            <h1>Success Story</h1>
            {stories.map((story) => (
                <div key={story._id}>
                    <h2>{story.name}</h2>
                    <p>{story.achievement}</p>
                    <p>{story.contribution}</p>
                </div>
            ))}
        </div>
    );
};

export default StoryList;
