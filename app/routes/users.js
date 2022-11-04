const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.get("/get/all", userController.getAllUser);
router.delete("/delete/:id", userController.deleteUser);
router.delete("/delete", userController.deleteAllUser);
router.post("/add", userController.addUser);
router.put("/edit/:id", userController.editUser);
router.post("/login", userController.login);

// router.use('/', (req, res) => {
//     return res.status(404).json({
//         status: false,
//         notice: "404 not found"
//     })
// })

module.exports = router;
