import React, { useState } from 'react';
import axios from 'axios';

const Flag = () => {
    const [flagReport, setFlagReport] = useState('');

    const handleFlag = async () => {
        try {
            const response = await axios.post('/api/flag', { flagReport });
            if (response.data.success) {
                alert('Flag has been raised successfully');
            } else {
                alert('Failed to raise the flag');
            }
        } catch (error) {
            console.error('Error while raising the flag', error);
        }
    };

    return (
        <div>
            <h2>Flag Content</h2>
            <textarea
                value={flagReport}
                onChange={(e) => setFlagReport(e.target.value)}
                placeholder="Enter your flag report here"
            />
            <button onClick={handleFlag}>Raise Flag</button>
        </div>
    );
};

export default Flag;