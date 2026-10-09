const db = require("../db/queries");

async function homeRender(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}

module.exports = { homeRender };
