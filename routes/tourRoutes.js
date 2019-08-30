const express = require('express');

// Assigning the import object to a var
// const tourController = require('./../controllers/tourController');

// Destructuring the import obj
const {
	aliasTopTours,
	getAllTours,
	createTour,
	getTour,
	updateTour,
	deleteTour,
	getTourStats,
	getMonthlyPlan
} = require('./../controllers/tourController');

const {
	protect,
	restrictTo
} = require('./../controllers/authController');

const {
	createReview
} = require('./../controllers/reviewController');

// README TOUR HANDLERS

const router = express.Router();

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/top-5-cheap')
	.get(aliasTopTours, getAllTours)

router.route('/')
	.get(
		protect,
		getAllTours)
	.post(createTour);

router.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(
		protect,
		restrictTo('admin', 'lead-guide'),
		deleteTour);

router.route('/:tourId/reviews')
	.post(
		protect,
		restrictTo('user'),
		createReview);

module.exports = router;