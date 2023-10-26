```javascript
// Importing necessary libraries
const axios = require('axios');

// CI/CD pipeline setup
const setupCICD = async () => {
    try {
        const response = await axios.post('https://api.circleci.com/v2/project/github/{username}/{project}/pipeline', {
            branch: 'master',
            parameters: {
                build: true
            }
        }, {
            headers: {
                'Circle-Token': '{your_circleci_token}'
            }
        });

        if (response.status === 201) {
            console.log('CI/CD pipeline setup successfully');
            return true;
        } else {
            console.log('Failed to setup CI/CD pipeline');
            return false;
        }
    } catch (error) {
        console.error(`Error in setting up CI/CD pipeline: ${error}`);
        return false;
    }
};

// Exporting the function
module.exports = {
    setupCICD
};
```