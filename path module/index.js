const path = require("node:path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname)); // empty string

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json")); // relative path

console.log(path.join("dir1", "dir2", "file.js"));
console.log(path.join("dir1", "dir2", "../file.js"));
console.log(path.join("dir1", "../dir2", "file.js"));
console.log(path.join(__dirname,"../Import JSON","data.json"));

console.log(path.resolve("dir1", "dir2", "file.js"));