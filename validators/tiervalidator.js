const { body, validationResult } = require('express-validator');

exports.tierValidationRules = [

    body('name').notEmpty().withMessage("name is required"),
    body('maxRequests').isInt({ min: 1 }).withMessage("maxRequests must be greater than 0"),
    body('windowSeconds').isInt({ min: 1 }).withMessage("windowSeconds must be greater than 0"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
            status: 'fail',
            code: 400,
            errors: errors.array(),
            });
        }
        next();
    },
];