const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public/home"));
app.use(express.static("public/register"));
app.use(express.static("public/contact"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/register/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact/index.html"));
});

app.listen(port, () => {
  console.log("Server started on http://localhost:3000");
});
