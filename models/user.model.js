const mongoose = require("mongoose");
const body = require("express-validator");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required : true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    tierId: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('User', UserSchema);