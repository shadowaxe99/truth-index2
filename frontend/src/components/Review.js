import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    return (
        <div className="review-container">
            {reviews.map((review) => (
                <div key={review._id} className="review-card">
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                    <p>Posted by: {review.author}</p>
                    <p>Trust Score: {review.trustScore}</p>
                </div>
            ))}
        </div>
    );
}

export default Review;