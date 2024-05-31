const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends",
    friend: "Abdul Moeed",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "farazkhanaa.jpg")
  // );
}

function postMessage(req, res) {
  console.log("updating Messages");
}

module.exports = {
  getMessages,
  postMessage,
};
