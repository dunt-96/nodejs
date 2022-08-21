const courseController = require("../controllers/courseController");
const express = require('express');
const router = express.Router();

router.put('/add', courseController.addCourse);

router.get('/:id', courseController.getCourseById);

router.get('/get/all', courseController.getAllCourse);

router.put('/edit', courseController.editCourse);

router.delete('/delete/:id', courseController.deleteCourse);

router.use('/', (req, res) => {
    return res.status(404).json({
        status: false,
        notice: "404 not found"
    })
})

module.exports = router;