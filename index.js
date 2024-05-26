const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("first");
  return res.send("Hello We are learning");
});

app.get("/messages", (req, res) => {
  return res.status(200).send("Hello Testing test");
});

app.post("/test", (req, res) => {
  if (req.url === "/test") {
    return res.send("Pakistan is teh largest country");
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
