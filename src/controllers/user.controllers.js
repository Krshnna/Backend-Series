const User = require("../models/user.models");

exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    let userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "Email already exists!!!",
      });
    }
    userExist = await User.create({
        username, email, phone, password
    });

    res.status(201).json({
        success: true,
        userExist
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.userLogin = async(req, res) => {
  try {

    const {email, password} = req.body;

    let userExists = await User.findOne({email}).select("+password");
    if(!userExists) {
      return res.status(400).json({
        message:"Invalid Credentials!!"
      })
    }
    const isMatchPassword = await userExists.matchPassword(password);
    console.log(isMatchPassword);

    if (!isMatchPassword) {
      return res.status(401).json({
        message: "Invalid email or password!!!"
      });
    }

    const token = await userExists.generateToken();
    const options = {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    }
    res.status(200).cookie("token", token, options).json({
      success:true,
      userExists,
      token,
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!!",
    });
  }
}