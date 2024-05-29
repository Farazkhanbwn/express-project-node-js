const express = require("express");
const friendRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.get("/", (_, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
