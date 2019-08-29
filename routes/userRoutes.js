const express = require('express');


// Destructuring the import obj
const {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	updateMe,
	deleteMe,
	deleteUser
} = require('./../controllers/userController');

const {
	signup,
	login,
	forgotPassword,
	resetPassword,
	updatePassword,
	protect
} = require('./../controllers/authController');

// README USER HANDLERS

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);

router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);


router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:id')
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

module.exports = router;