const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // const data = {
  //   name: "sajeev",
  //   age: 14
  // }

  res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(JSON.stringify(data));
  // res.end("<h1>Hello World!</h1>")
  // const html = fs.readFileSync("./index.html", "utf-8");
  // res.end(html);
  fs.createReadStream(__dirname+"/index.html").pipe(res);
  //   console.log(req);
});

server.listen(1234, () => {
  console.log("server running on port 1234");
});
