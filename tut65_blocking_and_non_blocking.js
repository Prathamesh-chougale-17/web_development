// syncronous or blocking 
// line by line execution


// asyncronous or non-blocking
// line by line not gauranteed
//call by will fire

const fs = require("fs");
fs.readFile("delete.txt", "utf-8", (error, data) => {
    console.log(data);//asyncronous module - it execute the module after function is done 
});

console.log("I'm first");

//Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish - Node.js uses callbacks. A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime  


