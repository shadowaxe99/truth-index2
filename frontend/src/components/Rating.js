import React, { useState } from 'react';
import axios from 'axios';

const Rating = ({ userId, entityId }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const submitRating = async () => {
    try {
      const response = await axios.post('/api/ratings', {
        userId,
        entityId,
        rating,
      });
      if (response.data.success) {
        alert('Rating submitted successfully');
      } else {
        alert('Failed to submit rating');
      }
    } catch (error) {
      console.error('Error submitting rating', error);
    }
  };

  return (
    <div>
      <h2>Rate this Entity</h2>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={submitRating}>Submit Rating</button>
    </div>
  );
};

export default Rating;