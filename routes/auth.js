// Routes for user auth.

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//DB Models
const User = require('../models/user');

// Route 	Post /auth
// Checks a user's login and returns user token if valid.
router.post('/', (req, res) => {
	const { username, password } = req.body;
	console.log(`Username: ${username}`);
	console.log(`Password: ${password}`);
	if ( !username || !password ) return res.status(400).json({msg: 'Username and Password required.'})

	User.findOne({ username })
		.then((user) => {
			if (!user) return res.status(401).json({msg: 'Invalid Username'});
			bcrypt.compare(password, user.password)
				  .then((isMatch) => {
				  	console.log(`isMatch: ${isMatch}`);
				  	if (!isMatch) {
				  		return res.status(401).json({msg: 'Invalid Password'});
				  	} else {
				  		const userAuth = {
				  			token: jwt.sign({userId: user._id}, "myPasswordToken", {expiresIn: "24h"}),
				  			user: {
				  				firstName: user.firstName,
				  				lastName: user.lastName,
				  			}
				  		}
				  		return res.json(userAuth);
				  	}
				  })
		})
});

module.exports = router;