const mongoose = require("mongoose");

exports.connectDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI).then((con) => {
        console.log(`Database connected at ${con.connection.host}`);
    }).catch((err) => {
        console.log(`Error in connecting to database: ${err}`);
        process.exit(0);
    });
};