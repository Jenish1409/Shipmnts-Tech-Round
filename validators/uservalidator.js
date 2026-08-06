const { body, validationResult } = require('express-validator');
const Tier = require('../models/tier.model.js');
const User = require('../models/user.model.js');

exports.userValidationRules = [

    body('name').notEmpty().withMessage("name is required"),
    body('email').isEmail().withMessage("Please enter a Valid Email").custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error('E-mail already in use');
      }
      return true;
    }),
    body('tierId').notEmpty().withMessage("tier ID cant be empty").custom(async (value) => {

      const tier = await Tier.findOne({ _id: value });
      if (!tier) {
        throw new Error(`No tier found with id ${value}`);
      }
      return true;
    }),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
            status: 'VALIDATION_ERROR',
            code: 400,
            errors: errors.array(),
            });
        }
        next();
    },
];

// Source - https://stackoverflow.com/a/59781351
// Posted by laxman
// Retrieved 2026-08-06, License - CC BY-SA 4.0

// validator.body('title').custom( (value, {req}) => {
//     console.log(value, req.params.id)
//     return Article.findOne({ title:value, _id:{ $ne: req.params.id } })
//       .then( article => {
//       if (article !== null) {
//         return Promise.reject('Title already in use');
//       }
//     })
//   })
