const readlineSync = require("readline-sync");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const userName = readlineSync.question("될까?");
console.log(userName);

emitter.on("messageLogged", function () {
  console.log("its good");
});
emitter.on("오 이게되네", () => {
  console.log("test fail");
});
//에밋 뜻 소음만들기, 무언가 만들기
emitter.emit("messageLogged");

class Cafe {
  constructor() {}
}
