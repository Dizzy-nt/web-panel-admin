const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/setup-admin", authController.register); // pake sekali aja pake postman

module.exports = router;