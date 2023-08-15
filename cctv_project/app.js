const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use("/assets", express.static("assets"));
app.use(express.urlencoded());

// app.set('view engine', 'pug');
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/contact", (req, res) => {
  res.status(200).render("contact.pug");
});

app.listen(port, () => {
  console.log(`this application started successfully on port ${port}`);
});
