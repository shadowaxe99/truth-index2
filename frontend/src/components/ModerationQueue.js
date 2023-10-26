import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModerationQueue = () => {
    const [moderationQueueData, setModerationQueueData] = useState([]);

    useEffect(() => {
        fetchModerationQueue();
    }, []);

    const fetchModerationQueue = async () => {
        try {
            const response = await axios.get('/api/moderation');
            setModerationQueueData(response.data);
        } catch (error) {
            console.error('Error fetching moderation queue data:', error);
        }
    };

    const handleModeration = async (id, action) => {
        try {
            await axios.post('/api/moderation', { id, action });
            fetchModerationQueue();
        } catch (error) {
            console.error('Error handling moderation:', error);
        }
    };

    return (
        <div>
            <h2>Moderation Queue</h2>
            {moderationQueueData.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <button onClick={() => handleModeration(item.id, 'approve')}>Approve</button>
                    <button onClick={() => handleModeration(item.id, 'reject')}>Reject</button>
                </div>
            ))}
        </div>
    );
};

export default ModerationQueue;