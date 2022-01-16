const readlineSync = require("readline-sync");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let a = 0;
rl.on("line", (line) => {
  a = +line;
});
console.log(a);
