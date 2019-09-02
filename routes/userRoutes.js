const express = require('express');

// Destructuring the import obj
const {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	updateMe,
	deleteMe,
	deleteUser,
	getMe
} = require('./../controllers/userController');

const {
	signup,
	login,
	forgotPassword,
	resetPassword,
	updatePassword,
	protect,
	restrictTo
} = require('./../controllers/authController');

// README USER HANDLERS

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch('/updateMyPassword', updatePassword);
router.get('/me', getMe, getUser);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin'));

router
	.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:id')
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

module.exports = router;