const { Router } = require("express");
const controller = require("../controllers/homecontroller");
const signUp = require("../controllers/signupcontroller");
const route = Router();

route.get("/", controller.homeRender);
route.get("/signup", signUp.signUpForm);

module.exports = route;
