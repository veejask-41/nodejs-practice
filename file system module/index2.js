const fs = require("node:fs/promises");

console.log("1")

// we can also wrap this in async-await wrapper function
fs.readFile("./text.txt","utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log("2")