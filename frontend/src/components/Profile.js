import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userProfileData, setUserProfileData] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('/api/userProfile');
            setUserProfileData(response.data);
        };

        fetchProfile();
    }, []);

    return (
        <div className="profile">
            <h2>{userProfileData.name}</h2>
            <p>{userProfileData.description}</p>
            <div className="linked-accounts">
                {userProfileData.linkedAccounts && userProfileData.linkedAccounts.map(account => (
                    <div key={account.id}>
                        <h3>{account.platform}</h3>
                        <p>{account.username}</p>
                    </div>
                ))}
            </div>
            <div className="public-stances">
                {userProfileData.publicStances && userProfileData.publicStances.map(stance => (
                    <div key={stance.id}>
                        <h3>{stance.topic}</h3>
                        <p>{stance.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;