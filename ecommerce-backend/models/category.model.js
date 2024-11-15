const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        minlength: 3,
        trim: true,
        require: true,
        maxlength: 90
    },
    viewValue: {
        type: String,
        trim: true,
        minlength: 2,
        require: true,
        maxlength: 100,
    },
    description: { 
        type: String,
        trim: true,
        minlength: 3,
        require: true,
        maxlength: 70,
    } 
    
});

module.exports = mongoose.model("Category", categorySchema);