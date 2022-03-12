const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`));
