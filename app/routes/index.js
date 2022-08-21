const express = require("express");

const courseRoute = require("./course");
const userRoute = require("./users")


let router = express.Router();


function initApiRoute(app) {
    app.use('/api/courses', courseRoute);

    app.use('/api/users', userRoute);

    app.use('/', (req, res, next) => {
        return res.status(404).json({
            status: false,
            notice: "404 not found"
        })
    })
}

module.exports = initApiRoute;