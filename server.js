const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Conenction.
const db = require('./config/keys').mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected."))
	.catch(error => console.log(error));

//App Routes
app.use('/users', require('./routes/user'));

//Start express server.
const port = 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
