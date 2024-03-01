const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public/homepage"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/homepage/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/registerpage/index.html"));
});

app.listen(port, () => {
  console.log("Server started on http://localhost:3000");
});
