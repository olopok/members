const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../db/queries");

function signUpFormGet(req, res) {
  res.render("signup");
}

async function signUpPost(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("signup", {
      errors: errors.array().map(({ msg }) => msg),
      formData: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
      },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.pwd, 10);
    await db.newMember(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      hashedPassword,
    );
    res.render("signup", {
      welcomeMessage: `Welcome to the club ${req.body.firstname}!!!`,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { signUpFormGet, signUpPost };
