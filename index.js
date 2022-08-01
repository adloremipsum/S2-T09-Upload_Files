const express = require("express");
const formidable = require("formidable");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/register", (req, res) => {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
    uploadDir: __dirname + "/public/avatars",
  });

  form.parse(req, (error, fields, files) => {
    res.json({
      firstname: fields.firstname,
      avatar: files.avatar.newFilename,
    });
  });
});

app.listen(3000, function () {
  console.log("http://localhost:3000");
});
