const mongoose = require('mongoose');
const User = require('../models/User');
const Review = require('../models/Review');
const Rating = require('../models/Rating');
const PublicStance = require('../models/PublicStance');

const verifyData = async (data, dataType) => {
    let isValid = false;
    switch(dataType) {
        case 'User':
            isValid = await User.exists({_id: mongoose.Types.ObjectId(data)});
            break;
        case 'Review':
            isValid = await Review.exists({_id: mongoose.Types.ObjectId(data)});
            break;
        case 'Rating':
            isValid = await Rating.exists({_id: mongoose.Types.ObjectId(data)});
            break;
        case 'PublicStance':
            isValid = await PublicStance.exists({_id: mongoose.Types.ObjectId(data)});
            break;
        default:
            throw new Error('Invalid data type');
    }
    return isValid;
}

module.exports = verifyData;