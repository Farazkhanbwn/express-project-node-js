const express = require("express");
const friendsController = require("../controllers/friends.controller");
const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log("req IP value is : ", req.ip);
  next();
});

friendRouter.get("/", friendsController.displayMainPage);
friendRouter.post("/", friendsController.postFriends);

module.exports = friendRouter;
