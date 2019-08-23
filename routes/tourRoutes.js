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

// README TOUR HANDLERS

const router = express.Router();

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/top-5-cheap')
	.get(aliasTopTours, getAllTours)

router.route('/')
	.get(getAllTours)
	.post(createTour);

router.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour);

module.exports = router;