const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const christmas = {
  santa: "🎅🏽",
  tree: "🎄",
  present: "🎁",
  snowman: "☃️",
  snowflake: "❄️",
  bell: "🔔",
  candle: "🕯️",
  deer: "🦌",
  train: "🚂",
};

const mail = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/christmas", (req, res) => {
  res.send(christmas);
});

app.get("/christmas/:element", (req, res) => {
  if (req.params.element in christmas) {
    res.send(christmas[req.params.element]);
  } else {
    res
      .status(404)
      .send(
        `Couldn't find any ${req.params.element} this Christmas! 😔 Try again next year!`
      );
  }
});

app.get("/mail", (req, res) => {
  res.send(mail);
});

app.post("/mail", (req, res) => {
  const mailRecieved = req.body.mail;
  if (!mailRecieved) {
    return res.sendStatus(400);
  }

  mail.push(mailRecieved);
  res.send(`💌 Santa recieved your mail: ${mailRecieved} 💌`);
});

app.listen(port);
