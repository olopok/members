const { body } = require("express-validator");

const validateSignUp = [
  body("firstname")
    .isString()
    .withMessage("First name must be text")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .bail()
    .isLength({ max: 50 })
    .withMessage("First name must be 50 characters or fewer"),
  body("lastname")
    .isString()
    .withMessage("Last name must be text")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .bail()
    .isLength({ max: 50 })
    .withMessage("Last name must be 50 characters or fewer"),
  body("email")
    .isString()
    .withMessage("Email must be text")
    .bail()
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Enter a valid email address")
    .bail()
    .isLength({ max: 254 })
    .withMessage("Email must be 254 characters or fewer"),
  body("pwd")
    .isString()
    .withMessage("Password must be text")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .bail()
    .custom((value) => Buffer.byteLength(value, "utf8") <= 72)
    .withMessage("Password must be 72 bytes or fewer"),
  body("pwdconfirm")
    .isString()
    .withMessage("Password confirmation must be text")
    .bail()
    .custom((value, { req }) => value === req.body.pwd)
    .withMessage("Passwords do not match"),
];

module.exports = validateSignUp;
