const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptData = async (plainText) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(plainText, salt);
        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const compareData = async (plainText, hash) => {
    try {
        const match = await bcrypt.compare(plainText, hash);
        return match;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = {
    encryptData,
    compareData
};