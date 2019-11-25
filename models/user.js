const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema = mongoose.Schema;

//Create User Schema
userSchema = new schema({
	username: {
		type: String,
		required: [true, 'is required.'],
		unique: true,
		minlength: [5, 'must be longer than 5 characters.'],
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: [true, 'is required.'],
	},
	lastName: {
		type: String,
		required: [true, 'is required.'],
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

userSchema.plugin(uniqueValidator, { message: 'already associated with an account.'});

module.exports = User = mongoose.model('user', userSchema);
