const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync('clone.html');

const Server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent);
});
Server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the port 8000");//for 80 we did not need to mention otherwise mention with :{number}
});