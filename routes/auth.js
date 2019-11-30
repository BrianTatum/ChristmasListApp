// Routes for user auth.

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//DB Models
const User = require('../models/user');

// Route 	Post /auth
// Checks a user's login and returns user token if valid.
router.post('/', (req, res) => {
	User.findByUsername(req.params.username)
		.then((user) => {
			res.json({ user });
		}).catch(err => res.status(401).json({msg: 'Invalid Username or Password'}));
});

module.exports = router;