```javascript
const mongoose = require('mongoose');

const FlagSchema = new mongoose.Schema({
    contentId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Flag = mongoose.model('Flag', FlagSchema);

const raiseFlag = async (contentId, userId, reason, additionalInfo) => {
    const newFlag = new Flag({
        contentId,
        userId,
        reason,
        additionalInfo
    });

    try {
        const savedFlag = await newFlag.save();
        return savedFlag;
    } catch (err) {
        throw err;
    }
};

const getFlags = async () => {
    try {
        const flags = await Flag.find();
        return flags;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    raiseFlag,
    getFlags
};
```