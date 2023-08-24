const express = require("express");
const User = require("../model/UserModel");
const sendToken = require("../utils/sendToken");
const router = express.Router();

router.route("/register").post(async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create(req.body);
    console.log("user created");
    sendToken(user, 201, res);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
module.exports = router;
