import axios from 'axios';

const apiCall = async (url, method, data = null, headers = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export const createUser = (userProfileData) => apiCall('/api/users', 'POST', userProfileData);
export const postReview = (userReviewData) => apiCall('/api/reviews', 'POST', userReviewData);
export const updateRating = (userRatingData) => apiCall('/api/ratings', 'PUT', userRatingData);
export const indexStance = (publicStanceData) => apiCall('/api/publicStances', 'POST', publicStanceData);
export const searchStance = (searchInput) => apiCall(`/api/publicStances/search?query=${searchInput}`, 'GET');
export const applyFilter = (filterInput) => apiCall(`/api/publicStances/filter?criteria=${filterInput}`, 'GET');
export const raiseFlag = (flagReport) => apiCall('/api/flags', 'POST', flagReport);
export const moderateContent = (moderationQueueData) => apiCall('/api/moderation', 'POST', moderationQueueData);
export const updatePrivacy = (privacySettings) => apiCall('/api/users/privacy', 'PUT', privacySettings);
export const checkAccessibility = (accessibilityControls) => apiCall('/api/accessibility', 'POST', accessibilityControls);
export const updateUIDesign = (uiDesignSettings) => apiCall('/api/uiDesign', 'PUT', uiDesignSettings);
export const authenticateUser = (authProcess) => apiCall('/api/auth', 'POST', authProcess);
export const encryptData = (encryptionProcess) => apiCall('/api/encryption', 'POST', encryptionProcess);
export const checkUIDesign = (uiDesignCheck) => apiCall('/api/uiDesign/check', 'POST', uiDesignCheck);
