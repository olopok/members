const { Router } = require("express");
const controller = require("../controllers/homecontroller");
const signUp = require("../controllers/signupcontroller");
const signin = require("../controllers/signincontroller");
const route = Router();

route.get("/", controller.homeRender);
route.get("/signup", signUp.signUpFormGet);
route.get("/signin", signin.signInFormGet);
route.post("/signup", signUp.signUpPost);

module.exports = route;
