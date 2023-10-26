```javascript
const User = require('../models/User');
const Review = require('../models/Review');
const Rating = require('../models/Rating');

const calculateTrustScore = async (userId) => {
    try {
        const user = await User.findById(userId);
        const reviews = await Review.find({ userId: userId });
        const ratings = await Rating.find({ userId: userId });

        let reviewScore = 0;
        reviews.forEach(review => {
            reviewScore += review.score;
        });
        reviewScore = reviewScore / reviews.length;

        let ratingScore = 0;
        ratings.forEach(rating => {
            ratingScore += rating.score;
        });
        ratingScore = ratingScore / ratings.length;

        const trustScore = (reviewScore + ratingScore) / 2;

        user.trustScore = trustScore;
        await user.save();

        return trustScore;
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    calculateTrustScore
};
```