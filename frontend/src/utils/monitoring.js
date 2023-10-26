import axios from 'axios';

// Function to monitor system performance
export const monitorSystem = async () => {
  try {
    const response = await axios.get('/api/monitoring');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in system monitoring:', error);
  }
};

// Function to log system metrics
export const logSystemMetrics = async (systemMetrics) => {
  try {
    const response = await axios.post('/api/logging', systemMetrics);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in logging system metrics:', error);
  }
};