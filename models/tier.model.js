const mongoose = require("mongoose");
const body = require("express-validator");

const TierSchema = new mongoose.Schema({

    name: {
        type: String,
        required : true,
    },
    maxRequests: {
        type: Number,
        required: true,
    },
    windowSeconds: {
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('Tier', TierSchema);