const router = require("express").Router();
const userController = require("../app/controllers/userController");
//1
router.post("/register", userController.register);
//2
router.post("/login_customer", userController.loginCustomer);
//3
router.post("/login_admin", userController.loginAdmin);
//4
router.get("/profile/:id", userController.profile);

//5
router.post("/update/:id", userController.updateProfile);
//6
router.get("/", userController.getAllUser);
module.exports = router;
