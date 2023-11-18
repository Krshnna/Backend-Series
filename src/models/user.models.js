import mongoose, { Schema } from "mongoose";
 
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lower: true,
        index: true
    },
    email:{
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type:String,
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    password:{
        type:String,
        required: [true, "Please provide password"],
    },
    refreshToken: {
        type: String,
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);