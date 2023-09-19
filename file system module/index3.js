const fs = require("node:fs");

const readableStream = fs.createReadStream("./file1.txt", {
  // this event emits "data" signal
  encoding: "utf-8",
  highWaterMark: 2, // max chunk size
});

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
