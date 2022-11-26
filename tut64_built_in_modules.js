// const Square = require('./square.js');
// const mySquare = new Square(2);
// console.log(`The area of mySquare is ${mySquare.area()}`);

const fs = require("fs");
let text = fs.readFileSync("ex.txt", "utf-8");//to change the variable of any file make it let from const
text = text.replace("prathamesh", "pratik");

console.log("The content of the file is ");
console.log(text);

console.log("The file is creating...");
fs.writeFileSync("delete.txt", text);