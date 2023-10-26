import React, { useState } from 'react';
import { encryptData } from '../utils/encryption';

const PrivacyControls = () => {
  const [privacySettings, setPrivacySettings] = useState({
    encryption: false,
    gdprCompliance: false,
    dataAnonymization: false
  });

  const handleToggle = (setting) => {
    setPrivacySettings(prevSettings => ({
      ...prevSettings,
      [setting]: !prevSettings[setting]
    }));
  };

  const handleSave = () => {
    if (privacySettings.encryption) {
      encryptData();
    }
    // Save other privacy settings to user profile
    // This is a placeholder, replace with actual implementation
  };

  return (
    <div>
      <h2>Privacy Controls</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={privacySettings.encryption}
            onChange={() => handleToggle('encryption')}
          />
          Enable end-to-end encryption
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={privacySettings.gdprCompliance}
            onChange={() => handleToggle('gdprCompliance')}
          />
          Enable GDPR compliance
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={privacySettings.dataAnonymization}
            onChange={() => handleToggle('dataAnonymization')}
          />
          Enable data anonymization
        </label>
      </div>
      <button onClick={handleSave}>Save Privacy Settings</button>
    </div>
  );
};

export default PrivacyControls;