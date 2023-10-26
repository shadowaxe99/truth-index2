const jest = require('jest');
const mongoose = require('mongoose');
const User = require('../models/User');
const Review = require('../models/Review');
const Rating = require('../models/Rating');
const PublicStance = require('../models/PublicStance');

beforeAll(async () => {
    const url = `mongodb://127.0.0.1/TrustIndexTestDB`
    await mongoose.connect(url, { useNewUrlParser: true })
})

test('create & save user successfully', async () => {
    const userData = { 
        name: 'Test User', 
        email: 'testuser@gmail.com', 
        password: 'testpassword' 
    };
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
});

test('create & save review successfully', async () => {
    const reviewData = { 
        userId: 'Test User', 
        review: 'This is a test review.', 
        date: new Date() 
    };
    const validReview = new Review(reviewData);
    const savedReview = await validReview.save();

    expect(savedReview._id).toBeDefined();
    expect(savedReview.userId).toBe(reviewData.userId);
    expect(savedReview.review).toBe(reviewData.review);
});

test('create & save rating successfully', async () => {
    const ratingData = { 
        userId: 'Test User', 
        rating: 5 
    };
    const validRating = new Rating(ratingData);
    const savedRating = await validRating.save();

    expect(savedRating._id).toBeDefined();
    expect(savedRating.userId).toBe(ratingData.userId);
    expect(savedRating.rating).toBe(ratingData.rating);
});

test('create & save public stance successfully', async () => {
    const publicStanceData = { 
        userId: 'Test User', 
        stance: 'This is a test stance.' 
    };
    const validPublicStance = new PublicStance(publicStanceData);
    const savedPublicStance = await validPublicStance.save();

    expect(savedPublicStance._id).toBeDefined();
    expect(savedPublicStance.userId).toBe(publicStanceData.userId);
    expect(savedPublicStance.stance).toBe(publicStanceData.stance);
});

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});