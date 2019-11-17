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
	let user = new User({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
	});
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(user.password, salt, (error, hash) => {
			if (error) {
				console.log(error)
			} else {
				user.password = hash;
				user.save(error => {
					if (error) {
						console.log(error)
					} else {
						res.json({userSaved: true, user})
					}
				});
			}
		});
	});
})

// Route: 	GET 	/user/id
// Get one user object by id.
router.get('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => { res.json(user)})
		.catch(error => {
			res.status(404).json({msg: 'User not found.'})
		})
})

// Route: 	PUT 	/user/:id
// Updates a user in the database.
router.put('/:id', (req, res) => {
	User.findById(req.params.id)
		.then( user => {
			const { firstName, lastName, username} = req.body;
			user.firstName = firstName;
			user.lastName = lastName;
			user.username = username;
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
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true,})))
		.catch(error => res.status(404).json({success: false}))
})



module.exports = router