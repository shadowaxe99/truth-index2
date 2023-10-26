import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accessibility = () => {
  const [accessibilityStatus, setAccessibilityStatus] = useState(null);

  useEffect(() => {
    checkAccessibility();
  }, []);

  const checkAccessibility = async () => {
    try {
      const response = await axios.get('/api/accessibilityCheck');
      setAccessibilityStatus(response.data);
    } catch (error) {
      console.error('Error checking accessibility:', error);
    }
  };

  return (
    <div>
      <h2>Accessibility Status</h2>
      {accessibilityStatus ? (
        <p>Our platform is WCAG compliant and accessible to all users.</p>
      ) : (
        <p>We are currently working on making our platform WCAG compliant and accessible to all users.</p>
      )}
    </div>
  );
};

export default Accessibility;