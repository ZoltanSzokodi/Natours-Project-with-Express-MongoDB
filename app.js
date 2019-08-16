const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// README - Middleware ~ is a function that can modify the incoming request data 
// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
};

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
	console.log('Hello from the middleware');
	next();
});

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});


// README MOUNTING THE ROUTERS
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

