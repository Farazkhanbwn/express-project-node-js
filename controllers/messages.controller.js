const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "farazkhanaa.jpg"));
}

function postMessage(req, res) {
  console.log("updating Messages");
}

module.exports = {
  getMessages,
  postMessage,
};
