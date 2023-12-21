const express = require("express");
const { register, userLogin } = require("../controllers/user.controllers");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(userLogin)

module.exports = router;