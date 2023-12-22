const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const user = require("./routes/user.routes");
const { errorHandler } = require("./middlewares/error.middlewares");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use("/api/v1", user);
app.use(errorHandler);


module.exports = app;