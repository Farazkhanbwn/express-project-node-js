const express = require("express");
const path = require("path");
const friendRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = express();
const PORT = 4000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.get("/", (_, res) => {
  res.render("index", {
    title: "We are Learning At OOP Technologies",
    caption: "Let' s go skining!",
  });
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
