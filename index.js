const express = require("express");
const messageController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const app = express();
const PORT = 4000;

app.get("/", friendsController.displayMainPage);

app.use(express.json());

app.get("/messages", messageController.getMessages);

app.post("/friends", friendsController.postFriends);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
