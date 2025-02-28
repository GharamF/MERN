const express = require("express");
const app = express();
const mongoose = require('mongoose');

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyJokesRoutes = require("./server/routes/Jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

