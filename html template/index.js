const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Aarushi";
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(1234,()=>{
    console.log("running on port 1234")
})
