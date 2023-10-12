const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About page");
      break;
    case "/data":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          name: "sajeev",
          age: "22",
        })
      );
      break;
    default:
    case "/about":
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("page not found");
      break;
  }
});

server.listen(1234, () => {
  console.log("server running on port 1234");
});
