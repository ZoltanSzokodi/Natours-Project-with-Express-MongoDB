const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const filterObj = (obj, ...allowedFields) => {
	const newObj = {};
	Object.keys(obj).forEach(el => {
		if (allowedFields.includes(el)) newObj[el] = obj[el];
	});
	return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find();

	// SEND RESPONSE
	res.status(200).json({
		status: 'success',
		results: users.length,
		data: {
			users
		}
	});
});

exports.updateMe = catchAsync(async (req, res, next) => {
	// 1) Create error if user posts pw data
	if (req.body.password || req.body.passwordConfirm) {
		return next(new AppError('This rote is not for password update. Please use /updateMyPassword', 400));
	}

	// 2) Filtered out unwanted field names 
	const filteredBody = filterObj(req.body, 'name', 'email');

	// 3) Update user document
	const updatedUser = await User.findOneAndUpdate(req.user.id, filteredBody, {
		new: true,
		runValidators: true
	});

	res.status(200).json({
		status: 'success',
		data: {
			user: updatedUser
		}
	});
});

exports.getUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'This route is not yet defined'
	});
};

exports.createUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'This route is not yet defined'
	});
};

exports.updateUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'This route is not yet defined'
	});
};

exports.deleteMe = catchAsync(async (req, res, next) => {
	await User.findByIdAndUpdate(req.user.id, {
		active: false
	});

	res.status(204).json({
		status: 'success',
		data: null
	});
});

exports.deleteUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'This route is not yet defined'
	});
};