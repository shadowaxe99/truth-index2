```javascript
const mongoose = require('mongoose');

// Define the moderation queue schema
const ModerationQueueSchema = new mongoose.Schema({
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FlagReport',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'resolved'],
        default: 'pending'
    },
    reviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reviewedAt: Date,
    actionTaken: String
});

// Define methods for handling moderation tasks
ModerationQueueSchema.methods.review = function(userId) {
    this.status = 'reviewed';
    this.reviewedBy = userId;
    this.reviewedAt = new Date();
};

ModerationQueueSchema.methods.resolve = function(action) {
    this.status = 'resolved';
    this.actionTaken = action;
};

// Export the moderation queue model
module.exports = mongoose.model('ModerationQueue', ModerationQueueSchema);
```