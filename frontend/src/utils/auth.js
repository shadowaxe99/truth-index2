import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/auth/';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'signin', {
      username,
      password
    });

    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error('Error during authentication', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    const decodedToken = jwtDecode(user.accessToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      logout();
      return null;
    }
    return user;
  }
  return null;
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(API_URL + 'signup', {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration', error);
    throw error;
  }
};