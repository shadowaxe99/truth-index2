const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');
const auth = require('../middleware/auth');

// Post a new rating
router.post('/', auth, async (req, res) => {
    try {
        const rating = new Rating({
            user: req.user.id,
            entity: req.body.entity,
            score: req.body.score
        });

        const savedRating = await rating.save();
        res.json(savedRating);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all ratings
router.get('/', async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.json(ratings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a rating
router.put('/:id', auth, async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);

        if (!rating) {
            return res.status(404).json({ msg: 'Rating not found' });
        }

        if (rating.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        rating.score = req.body.score;
        await rating.save();

        res.json(rating);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a rating
router.delete('/:id', auth, async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);

        if (!rating) {
            return res.status(404).json({ msg: 'Rating not found' });
        }

        if (rating.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await rating.remove();

        res.json({ msg: 'Rating removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;