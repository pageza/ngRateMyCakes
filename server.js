//Importing the Express framework
const express = require("express");

// Importing mongoose
const mongoose = require("mongoose");

// Setting the port for the app to run on
const PORT = 8888;

//Assigning Express to an object so we can use the functions
const app = express();

//Setting the Express app to use the static folder
app.use(express.static(__dirname + "/public/dist/public"));

//Setting the Express app to accept POST requests
app.use(express.urlencoded({extended: true}));
// Setting the app to use json
app.use(express.json());

// Pulling the Models and Schemas
require('./server/config/mongoose.js')

// Pulling the routes from the routes module
require('./server/config/routes.js')(app)

//This sets the Express app to listen to port 8000 on our localhost
app.listen(PORT, () => console.log("Running on port: "+PORT));

