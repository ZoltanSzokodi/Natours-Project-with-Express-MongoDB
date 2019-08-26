const express = require('express');


// Destructuring the import obj
const {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser
} = require('./../controllers/userController');

const {
	signup
} = require('./../controllers/authController');

// README USER HANDLERS

const router = express.Router();

router.post('/signup', signup);

router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:id')
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

module.exports = router;