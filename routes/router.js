const { Router } = require("express");
const controller = require("../controllers/homecontroller");
const signUp = require("../controllers/signupcontroller");
const signin = require("../controllers/signincontroller");
const passport = require("passport");
const route = Router();

route.get("/", controller.homeRender);
route.get("/signup", signUp.signUpFormGet);
route.get("/signin", signin.signInFormGet);
route.post("/signup", signUp.signUpPost);
route.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureMessage: true,
  }),
);
route.get("/logout", controller.logout);

module.exports = route;
