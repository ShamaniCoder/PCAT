const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "temp/index.html"));
  console.log(__dirname);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`));
