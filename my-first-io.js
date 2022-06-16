const fs = require("fs");
const result =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;
console.log(result);
