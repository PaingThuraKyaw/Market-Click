import express from "express";

const app = express();

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
}

//register views engin
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/api/shopping", (req, res) => {
  const products: IProduct[] = [
    {
      id: "123",
      title: "Phone",
      imageUrl: "https://i3einter",
    },
  ];
  res.json(products);
});
app.listen(3000, function () {
  console.log("running on port 3000");
});
