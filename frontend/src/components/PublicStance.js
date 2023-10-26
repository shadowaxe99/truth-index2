import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicStance = () => {
    const [publicStanceData, setPublicStanceData] = useState([]);

    useEffect(() => {
        const fetchPublicStances = async () => {
            const response = await axios.get('/api/publicStances');
            setPublicStanceData(response.data);
        };

        fetchPublicStances();
    }, []);

    return (
        <div>
            <h2>Public Stances</h2>
            {publicStanceData.map((stance, index) => (
                <div key={index}>
                    <h3>{stance.title}</h3>
                    <p>{stance.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PublicStance;