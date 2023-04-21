const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For using static files
app.use("/static", express.static("static"));

//set the templete engine as pug
app.set("view engine", "pug");

//set views directory
app.set("views", path.join(__dirname, ""));

app.get("/", (req, res) => {
  const con = "prathamesh is bad boy";
  const param = { title: "pug is best package", content: con };
  res.status(200).render("demo.pug", param);
});
app.listen(port, () => {
  console.log(`this application started successfully on port ${port}`);
});
