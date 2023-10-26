const express = require('express');
const router = express.Router();
const PublicStance = require('../models/PublicStance');
const auth = require('../middleware/auth');

// Get all public stances
router.get('/', async (req, res) => {
    try {
        const publicStances = await PublicStance.find();
        res.json(publicStances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one public stance
router.get('/:id', getPublicStance, (req, res) => {
    res.json(res.publicStance);
});

// Create one public stance
router.post('/', auth, async (req, res) => {
    const publicStance = new PublicStance({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    });

    try {
        const newPublicStance = await publicStance.save();
        res.status(201).json(newPublicStance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one public stance
router.patch('/:id', auth, getPublicStance, async (req, res) => {
    if (req.body.title != null) {
        res.publicStance.title = req.body.title;
    }

    if (req.body.description != null) {
        res.publicStance.description = req.body.description;
    }

    try {
        const updatedPublicStance = await res.publicStance.save();
        res.json(updatedPublicStance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one public stance
router.delete('/:id', auth, getPublicStance, async (req, res) => {
    try {
        await res.publicStance.remove();
        res.json({ message: 'Deleted Public Stance' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPublicStance(req, res, next) {
    let publicStance;
    try {
        publicStance = await PublicStance.findById(req.params.id);
        if (publicStance == null) {
            return res.status(404).json({ message: 'Cannot find public stance' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.publicStance = publicStance;
    next();
}

module.exports = router;