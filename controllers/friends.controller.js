const model = require("../models/friends.model");

function displayMainPage(req, res) {
  res.render("friends", {
    friend: "Abdul Rehman",
    attitude: "positive smiling attitude",
  });
  // console.log("first");
  // return res.send("Hello We are learning");
}

function postFriends(req, res) {
  console.log("req body :  ", req.body);
  if (req.body.name) {
    model.push({
      name: req.body.name,
      id: model.length,
    });
    return res.send(model);
  } else {
    return res.status(402).send({
      error: "user not found",
    });
  }
}

module.exports = {
  postFriends,
  displayMainPage,
};
