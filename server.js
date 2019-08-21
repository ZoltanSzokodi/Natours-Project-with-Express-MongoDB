const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(con => {
	console.log(con.connections);
	console.log('DB connection successful!');
}).catch(err => console.log(err.message));

// console.log(process.env);

const toursSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A tour must have a name'],
		unique: true
	},
	rating: {
		type: Number,
		default: 4.5
	},
	price: {
		type: Number,
		required: [true, 'A tour must have a price']
	}
});

const Tour = mongoose.model('Tour', toursSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
});

