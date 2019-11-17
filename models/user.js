const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create User Schema
userSchema = new schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('user', userSchema);