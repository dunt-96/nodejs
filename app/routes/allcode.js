const express = require('express');
const router = express.Router();
const allcodeController = require('../controllers/allcodeController');

router.get('/get-allcodes', allcodeController.getAllCode);
router.put('/get-all-allcodes', allcodeController.getAllCode);
router.delete('/get-all-allcodes', allcodeController.getAllCode);
router.post('/get-all-allcodes', allcodeController.getAllCode);


module.exports = router;