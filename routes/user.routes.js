const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js');

const { userValidationRules } = require('../validators/uservalidator.js');

router.post('/', userValidationRules, async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({newUser});
    } catch (error) {
        res.status(500).json({
            error: error.code,
            message: error.message
        });
    }
});

module.exports = router;