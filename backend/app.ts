import express from "express";
import category from "./initData/category";

const app = express();

//register views engin
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/api/shopping", (req, res) => {
  res.json(category);
});

app.listen(3000, function () {
  console.log("running on port 3000");
});
