const express = require('express');
const reviewRouter = require('./../routes/reviewRoutes');

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
	getMonthlyPlan,
	getToursWithin
} = require('./../controllers/tourController');

const {
	protect,
	restrictTo
} = require('./../controllers/authController');

// README TOUR HANDLERS

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap')
	.get(aliasTopTours, getAllTours)

router.route('/tour-stats')
	.get(getTourStats);
router.route('/monthly-plan/:year')
	.get(
		protect,
		restrictTo('admin', 'lead-guide', 'guide'),
		getMonthlyPlan);

router.route('/tours-within/:distance/center/:latlng/unit/:unit')
	.get(getToursWithin);

router.route('/')
	.get(getAllTours)
	.post(
		protect,
		restrictTo('admin', 'lead-guide'),
		createTour);

router.route('/:id')
	.get(getTour)
	.patch(
		protect,
		restrictTo('admin', 'lead-guide'),
		updateTour)
	.delete(
		protect,
		restrictTo('admin', 'lead-guide'),
		deleteTour);

module.exports = router;