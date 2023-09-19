const fs = require("node:fs");

console.log("1");

const fileContents = fs.readFileSync("./text.txt", "utf-8"); // synchronous function
console.log(fileContents);

console.log("2");

fs.readFile("./text.txt", "utf-8", (error, data) => {
  // async function
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("3");

fs.writeFileSync("./test.txt", "CSE - Come See Enjoy");

fs.writeFile("./test.txt", "\nHey ENTC, lolll", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file written");
  }
});
