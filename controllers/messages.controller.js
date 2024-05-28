function getMessages(req, res) {
  res.send("<ul><li>Hello Abert! </li></ul>");
}

function postMessage(req, res) {
  console.log("updating Messages");
}

module.exports = {
  getMessages,
  postMessage,
};
