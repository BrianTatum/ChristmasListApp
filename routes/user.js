// Routes for Users.

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//DB Models
const User = require('../models/user');

// Route: 	GET	/users
// Returns json array of all user objects.
router.get('/', (req, res) => {
	User.find()
		.sort({lastName: 1})
		.then(items => res.json(items));
})

// Route: 	Post	/user 
// Adds a new user to the database.
router.post('/', (req, res) => {
	const { user } = req.body;
	const errors = validatePassword(user);
	if (errors) {
		res.json({userSaved: false, errors})
	} else {
		let newUser = new User({
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			password: hashPassword(user.password),
		});
		newUser.save(errors => {
			if (errors) {
				res.json({userSaved: false, errors: errors.errors})
			} else {
				console.log('Sending save res...')
				res.json({userSaved: true, user: newUser})
			}
		});
	}
})

// Route: 	GET 	/user/id
// Get one user object by id.
router.get('/:id', (req, res) => {
	User.findById(req.params.id)
		.select("-password")
		.then(user => { res.json({user})})
		.catch(error => {
			res.status(404).json({msg: 'User not found.'})
		})
})

// Route: 	PUT 	/user/:id
// Updates a user in the database.
router.put('/:id', (req, res) => {
	console.log(`Id: ${req.params.id}`);
	User.findById(req.params.id)
		.then( user => {
			const { user: userUpdate } = req.body;
			user.firstName = userUpdate.firstName;
			user.lastName = userUpdate.lastName;
			user.username = userUpdate.username;
			if (userUpdate.password && userUpdate.password ==  userUpdate.confirmPassword) {
				user.password = hashPassword(userUpdate.password)
			}
			user.save(error => {
				if (error) {
					res.status(404).json({userSaved: false})
				} else {
					res.json({userSaved: true, user})
				}
			})
		}).catch(error => {
			res.status(404).json({msg: 'User not found.'})
		})
})

// Route: 	DELETE	/user/:id
// Deletes a user from the database.
router.delete('/:id', (req, res) => {
	console.log(`Id: ${req.params.id}`);
	User.findById(req.params.id)
		.then(user => user.remove()
						  .then(() => {
						  	User.find()
								.sort({lastName: 1})
								.then(items => res.json(items));
						  }))
		.catch(error => res.status(404).json({success: false}))
});

// Validates the screen password fields.
function validatePassword(user) {
	let anyErrors = false;
	let errors = {};

	// Password validation:
	if (!user.password) {
		errors.password = {message: 'is required.'};
		anyErrors = true;
	} else if (user.password.length < 5) {
		errors.password = {message: 'must be longer than 5 characters.'};
		anyErrors = true;
	}

	// Password Confirmation validation:
	if (user.password != user.confirmPassword) {
		errors.confirmPassword = {message: 'does not match Password.'};
		anyErrors = true;
	}

	return anyErrors ? errors : null;
}

// Hashes the screen password for database storage.
function hashPassword(password) {
	let salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
}

module.exports = router