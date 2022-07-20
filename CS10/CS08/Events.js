const EventEmitter = require("events");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const emitter = new EventEmitter();

exports.interval = new EventEmitter();
exports.getOrder = new EventEmitter();
exports.makingCoffee = new EventEmitter();

setInterval(function () {
  exports.interval.emit("manage");
}, 1000);

rl.on("line", (line) => {
  exports.getOrder.emit("getOrder", line);
});

emitter.on("1", () => {
  console.log("아메리카노 시작");
  setTimeout(() => {
    console.log("아메리카노 완성");
  }, 3000);
});
emitter.on("2", () => {
  console.log("라떼 시작");
  setTimeout(() => {
    console.log("라떼 완성");
  }, 5000);
});
emitter.on("3", () => {
  console.log("프라푸치노 시작");
  setTimeout(() => {
    console.log("프라푸치노 완성");
  }, 10000);
});

//참조 : https://javafa.gitbooks.io/nodejs_server_basic/content/chapter7.html
