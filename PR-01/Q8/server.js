const a = require('http');

const server = a.createServer((re,rs)=>{
    rs.write("Server created successfully");
    rs.end();
});

server.listen(8000,"127.0.0.1",()=>{
    console.log('Loaded successfully');
});