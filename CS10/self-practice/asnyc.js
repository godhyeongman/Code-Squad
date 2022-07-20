const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const OrderQueue = require("./orderQueue.js");

async function test() {
  let answer = new Promise((resolve, reject) => {
    rl.on("line", (line) => resolve(line));
  });
  let result = await answer;
  console.log(result);
  rl.close();
}

test();

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    // 1000밀리초 후에 이행됨(result는 this.num*2)
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // 1초 후, 변수 result는 2가 됨
  let result = await new Thenable(1);
  console.log(result);
}

f();
