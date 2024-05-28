const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    name: "faraz",
    id: 0,
  },
  { name: "rana", id: 1 },
  { name: "zohaib", id: 2 },
];

app.get("/", (req, res) => {
  console.log("first");
  return res.send("Hello We are learning");
});

app.use(express.json());

app.get("/messages", (req, res) => {
  return res.status(200).send("Hello Testing test user");
});

app.post("/friends", (req, res) => {
  console.log("req ", req.body);
  if (req.body.name) {
    friends.push({
      name: req.body.name,
      id: friends.length,
    });
    return res.send(friends);
  } else {
    return res.status(402).send({
      error: "user not found",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
