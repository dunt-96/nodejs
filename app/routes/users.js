const userController = require('../controllers/userController')
const express = require('express');
const router = express.Router();

router.get('/get/all', userController.getAllUser);
router.get('/get/:id', userController.getUserById);
router.delete('/delete/:id', userController.deleteUser);
router.delete('/delete', userController.deleteAllUser);
router.post('/add', userController.addUser);
router.put('/edit/:id', userController.editUser);


module.exports = router;