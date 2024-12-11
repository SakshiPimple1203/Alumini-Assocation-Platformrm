import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/api/stories')
      .then((response) => setStories(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Success Stories</h1>
      {stories.map((story) => (
        <div key={story._id}>
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          <small>By: {story.name} on {new Date(story.date).toDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Story;
