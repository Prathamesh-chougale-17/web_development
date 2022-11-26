const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For using static files
app.use('/static', express.static('static'));

//set the templete engine as pug
app.set('view engine', 'pug')

//set views directory
app.set('views', path.join(__dirname, 'views'));

app.get("/index", (req, res) => {
    res.status(200).render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get("/", (req, res) => {
    res.send("This is my first homepage of express app")
});
app.get("/about", (req, res) => {
    res.send("This is my first about of express app")
});
app.post("/about", (req, res) => {
    res.send("This is my post requist first about of express app")
});
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`)
});