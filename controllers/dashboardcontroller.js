const db = require("../db/queries");

async function newMessagePost(req, res) {
  await db.newUserPost(req.body.messageTitle, req.body.new, req.body.userId);
  res.render("userdashboard");
}

module.exports = { newMessagePost };
