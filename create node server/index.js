const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("hi sajeev!");
//   console.log(req);
});

server.listen(1234, () => {
  console.log("server running on port 1234");
});
