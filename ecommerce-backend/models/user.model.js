const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        minlength: 3,
        trim: true,
        maxlength: 90,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
        minlength: 3,
        trim: true,
        maxlength: 100,
        require: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 70,
        require: true
    },
    description: { 
        type: String,
        trim: true,
        minlength: 5,
        require: true,
        maxlength: 500,

     },
    country: { 
        type: String,
        minlength: 3,
        require: true,
        maxlength: 100,
    },
    image: { 
        type: String,
        trim: true,
        minlength: 3,
        require: true,
        maxlength: 300,
    },
    DateBirth: { 
        type: Date,
        default: Date.now,
     },
    active: { 
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "client",
        enum: ["client", "admin", "user"]
    }
});

module.exports = mongoose.model("User", userSchema);