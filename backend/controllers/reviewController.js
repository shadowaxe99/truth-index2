const express = require('express');
const Review = require('../models/Review');
const auth = require('../middleware/auth');

const router = express.Router();

// Post a review
router.post('/reviews', auth, async (req, res) => {
    try {
        const review = new Review({
            ...req.body,
            owner: req.user._id
        });
        await review.save();
        res.status(201).send({ review, message: 'reviewPosted' });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all reviews
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.send(reviews);
    } catch (error) {
        res.status(500).send();
    }
});

// Get a specific review
router.get('/reviews/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const review = await Review.findOne({ _id });
        if (!review) {
            return res.status(404).send();
        }
        res.send(review);
    } catch (error) {
        res.status(500).send();
    }
});

// Update a review
router.patch('/reviews/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['content', 'rating'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const review = await Review.findOne({ _id: req.params.id, owner: req.user._id });

        if (!review) {
            return res.status(404).send();
        }

        updates.forEach((update) => review[update] = req.body[update]);
        await review.save();
        res.send(review);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a review
router.delete('/reviews/:id', auth, async (req, res) => {
    try {
        const review = await Review.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

        if (!review) {
            res.status(404).send();
        }

        res.send(review);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;