const db = require("../db/queries");

async function homeRender(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages, user: req.user });
}

function logout(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = { homeRender, logout };
