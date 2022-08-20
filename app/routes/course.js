const courseController = require("../controllers/courseController");
const express = require('express');
const router = express.Router();

router.put('/add', courseController.addCourse);

router.get('/:id', courseController.getCourseById);

router.get('/get/all', courseController.getAllCourse);

router.put('/edit', courseController.editCourse);

router.delete('/delete/:id', courseController.deleteCourse);

module.exports = router;