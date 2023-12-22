const express = require("express");
const {
  register,
  userLogin,
  logout,
} = require("../controllers/user.controllers");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(userLogin);
router.route("/logout").get(logout);

module.exports = router;
