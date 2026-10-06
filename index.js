const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const homeRouter = require('./routes/home');
const newRouter = require('./routes/new');
app.use( "/", homeRouter);
app.use( "/new", newRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});