/**
 * Created by stevenmcdonald on 2/25/17.
 */

"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const config = require("./config/database");

// Connection to database
mongoose.connect(config.database);

// For successful connection to database.
mongoose.connection.on("error", function (error) {
    console.log("Connection to database was unsuccessful" + error);
});

// Check to see if connection to database was unsuccessful.
mongoose.connection.on("connected", function () {
    console.log("Connected to database" + config.database);
});

const app = express();

const users = require("./routes/users");

// Port number
const port = 8080;

// Cors middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(bodyParser.json());

app.use("/users", users);

// Index route
app.get("/", function (request, response) {
   response.send("This is the index route");
});

app.listen(port, function () {
    console.log("Server started on: " + port);
});

