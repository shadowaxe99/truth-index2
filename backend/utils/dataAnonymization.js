```javascript
const crypto = require('crypto');

// Function to anonymize data
const anonymizeData = (data) => {
    // Create a hash of the data
    const hash = crypto.createHash('sha256');
    hash.update(data);
    const hashedData = hash.digest('hex');

    return hashedData;
}

module.exports = anonymizeData;
```