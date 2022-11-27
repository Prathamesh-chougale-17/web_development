const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// For using static files
app.use('/static', express.static('static'));
app.use(express.urlencoded());
//set the templete engine as pug
app.set('view engine', 'pug')

//set views directory
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    const con = "prathamesh is bad boy"
    const param = { 'title': 'pug is best package', 'content': con }
    res.status(200).render('demo.pug', param);
});
app.post('/',(req,res)=>{
    //console.log(req.body);//res.body is object with entered information
    name = req.body.name;
    email = req.body.email;
    gender = req.body.gender;
    address = req.body.address;
    health = req.body.health;
    console.log(gender);
    console.log(name);
    let output=`The name of person is ${name}
The gender of ${name} is ${gender}
The email of ${name} is ${email}
The address of ${name} is ${address}
The health of ${name} is ${health}`
    fs.writeFileSync('output.txt',output);
    const param = { 'message': 'Your response has been recieved'}
    res.status(200).render('demo.pug',param)
});
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`)
});