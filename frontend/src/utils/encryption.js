import bcrypt from 'bcryptjs';

const saltRounds = 10;

export const encryptData = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedData = await bcrypt.hash(data, salt);
    return encryptedData;
  } catch (error) {
    console.error('Encryption error:', error);
    throw error;
  }
};

export const compareData = async (data, encryptedData) => {
  try {
    const match = await bcrypt.compare(data, encryptedData);
    return match;
  } catch (error) {
    console.error('Data comparison error:', error);
    throw error;
  }
};