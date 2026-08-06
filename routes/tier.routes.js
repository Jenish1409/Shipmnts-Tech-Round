const express = require('express');
const router = express.Router();
const Tier = require('../models/tier.model.js');

const { tierValidationRules } = require('../validators/tiervalidator.js');

router.post('/', tierValidationRules, async (req, res) => {
    try {
        const newTier = await Tier.create(req.body);
        res.status(201).json({newTier});
    } catch (error) {
        res.status(500).json({
            error: error.code,
            message: error.message
        });
    }
});

module.exports = router;