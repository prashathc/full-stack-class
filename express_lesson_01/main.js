const express = require("express");

const app = express();

app.get("/json", (request, response) => {
  console.log(request.query);
  response.json({ message: "hello world" });
});

app.get("/html", (request, response) => {
  response.send("<p>hello world</p>");
});

app.get("/badjson", (request, response) => {
  response.status(500).json({ message: "internal server error" });
});

app.get("/path/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({ id: req.params.id });
});

app.get("/redirect", (req, res) => {
  res.redirect("https://www.google.com");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "route does not exist" });
});

app.listen("8080", () => {
  console.log("listening on port 8080");
});
