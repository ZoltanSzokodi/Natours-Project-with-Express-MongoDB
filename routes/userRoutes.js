const express = require('express');

// Destructuring the import obj
const { 
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser 
} = require('./../controllers/userController');

// README USER HANDLERS

const router = express.Router();

router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:id')
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

module.exports = router;