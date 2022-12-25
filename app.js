const express = require("express");
const morgan = require("morgan");

// app object
const app = express();

// app.use(morgan("dev"));
// app.use(morgan("common"));
app.use(morgan("tiny"));

//	http://localhost:8000
app.get("/", (req, res) => {
  console.log("The root path was called");
  res.send("Hello Express!");
});

app.get("/burgers", (req, res) => {
  res.send("We have juicy cheese burgers!");
});

app.get("/pizza/pepperoni", (req, res) => {
  res.send("Your pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("We don't serve that here. Never call again!");
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});
