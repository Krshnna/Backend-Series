const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at ${process.env.PORT}`);
})
module.exports = app;