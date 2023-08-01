// const a = require("http");

// const server = a.createServer((require,respones)=>{
//     respones.end("Connection established");
// });

// server.listen(8080,"127.0.0.1",()=>{
//     console.log("Listening port")
// })



var http = require('http');
var fs = require('fs');
http.createServer((req, res) =>{
  fs.readFile('server.html',(err, data) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


