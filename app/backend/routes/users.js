/**
 * Created by stevenmcdonald on 2/25/17.
 */

 "use strict";

const express = require("express");
const router = express.Router();

// Register
router.get("/register", function(request, response, next){
    response.send("Register");
});

// Set for authentication of a user.
router.post("/authenticate", function(request, response, next) {
    response.send("Authenticate");
});

// Fetch user information
router.get("/userinfo", function(request, response, next) {
    response.send("User Information");
});

module.exports = router;
