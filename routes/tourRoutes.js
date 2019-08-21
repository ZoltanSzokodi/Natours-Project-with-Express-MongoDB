const express = require('express');
// const tourController = require('./../controllers/tourController');

const { checkBody,
		getAllTours, 
		createTour, 
		getTour, 
		updateTour, 
		deleteTour } = require('./../controllers/tourController');

// README TOUR HANDLERS

const router = express.Router();

// Adding checkID middleware
// router.param('id', checkID);

router.route('/')
	.get(getAllTours)
	.post(checkBody, createTour);

router.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete();

	module.exports = router;