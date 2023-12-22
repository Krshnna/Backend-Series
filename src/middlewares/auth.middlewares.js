const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

exports.authentication = async (req, res, next) => {
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
        const { token } = req.headers.authorization.split(" ")[1];
        if(!token) {
            res.status(401).json({
                message: "Login required"
            })
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id);
        next();
      } catch (error) {
        next(error);
      }
  }
};
