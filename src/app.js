const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDatabase } = require("./database/db");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

const user = require("./routes/user.routes");

app.use("/api/v1", user);

module.exports = app;