const { Router } = require("express");
const controller = require("../controllers/homecontroller");
const signUp = require("../controllers/signupcontroller");
const validateSignUp = require("../middleware/signupvalidation");
const signin = require("../controllers/signincontroller");
const userDash = require("../controllers/dashboardcontroller");
const passport = require("passport");
const route = Router();

route.get("/", controller.homeRender);
route.get("/signup", signUp.signUpFormGet);
route.get("/signin", signin.signInFormGet);
route.get("/userdashboard", signin.userDashBoardGet);
route.post("/signup", validateSignUp, signUp.signUpPost);
route.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/userdashboard",
    failureRedirect: "/signin",
    failureMessage: true,
  }),
);
route.get("/logout", controller.logout);
route.post("/userdashboard", userDash.newMessagePost);
route.get("/show-old/:id", userDash.oldMessagesListGet)


module.exports = route;
