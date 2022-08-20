const express = require("express");

const courseRoute = require("./course");
const userRoute = require("./users")

let router = express.Router();


function initApiRoute(app) {
    app.use('/api/courses', courseRoute);

    app.use('/api/users', userRoute);
}

module.exports = initApiRoute;