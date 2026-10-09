const bcrypt = require("bcryptjs");
const db = require("../db/queries");

function signUpFormGet(req, res) {
  res.render("signup");
}

async function signUpPost(req, res, next) {
  if (req.body.pwd === req.body.pwdconfirm) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.pwd, 10);
      await db.newMember(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        hashedPassword,
      );
      res.render('signup', {welcomeMessage: `Welcome to the club ${req.body.firstname}!!!`})
    } catch (error) {
      console.error(error);
      next(error);
    }
  } else {
    res.render("signup", { message: "Password don't match" });
  }
}

module.exports = { signUpFormGet, signUpPost };
