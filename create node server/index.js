const http = require("node:http");

const server = http.createServer((req, res) => {
  const data = {
    name: "sajeev",
    age: 14
  }
  
  res.writeHead(200, {"Content-Type":"application/json"});
  res.end(JSON.stringify(data));
//   console.log(req);
});

server.listen(1234, () => {
  console.log("server running on port 1234");
});
