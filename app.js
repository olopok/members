const express = require("express");
require("dotenv").config();
const path = require("node:path");
const session = require("express-session");
const passport = require("./config/passport");
const route = require("./routes/router");
const assetsPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use("/", route);
app.use(passport.session());

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
