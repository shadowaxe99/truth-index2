const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const reviewController = require('../controllers/reviewController');
const ratingController = require('../controllers/ratingController');
const publicStanceController = require('../controllers/publicStanceController');
const auth = require('../middleware/auth');

// User routes
router.post('/user', auth, userController.createUser);
router.get('/user/:id', auth, userController.getUser);
router.put('/user/:id', auth, userController.updateUser);
router.delete('/user/:id', auth, userController.deleteUser);

// Review routes
router.post('/review', auth, reviewController.postReview);
router.get('/review/:id', auth, reviewController.getReview);
router.put('/review/:id', auth, reviewController.updateReview);
router.delete('/review/:id', auth, reviewController.deleteReview);

// Rating routes
router.post('/rating', auth, ratingController.updateRating);
router.get('/rating/:id', auth, ratingController.getRating);

// Public Stance routes
router.post('/publicStance', auth, publicStanceController.indexStance);
router.get('/publicStance/:id', auth, publicStanceController.getStance);
router.put('/publicStance/:id', auth, publicStanceController.updateStance);
router.delete('/publicStance/:id', auth, publicStanceController.deleteStance);

module.exports = router;