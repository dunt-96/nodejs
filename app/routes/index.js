const express = require("express");

const courseRoute = require("./course");
const userRoute = require("./users");
const allcodeRoute = require("./allcode");
const doctorRoute = require("./doctor");

function initApiRoute(app) {
  app.use("/api/courses", courseRoute);

  app.use("/api/users", userRoute);

  app.use("/api/allcode", allcodeRoute);

  app.use("/api/doctor", doctorRoute);

  app.use("/", (req, res, next) => {
    return res.status(404).json({
      status: false,
      notice: "404 not found",
    });
  });
}

module.exports = initApiRoute;
