const mongoose = require('mongoose');

const PublicStanceSchema = new mongoose.Schema({
    entity: {
        type: String,
        required: true
    },
    stance: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PublicStance', PublicStanceSchema);