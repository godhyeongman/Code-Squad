const events = require("./Events.js");

class Cashier {
  // 음료주문 연속가능
  constructor() {}
  getInput(Q) {
    events.getOrder.on("getOrder", (line) => {
      Q.push(line.split(":"));
    });
  }
}

class Mannager {
  constructor() {
    this.idCount = 0;
  }
  checkSchdule(Q, BQ) {
    Q = ["1", "8"];
    events.interval.on("manage", () => {
      const checked = Q.splice(0, Q.length);
      checked.forEach((element) => {
        for (let i = 0; i < element[1]; i++) {
          this.idCount++;
          BQ.push({ name: element[0], id: this.idCount });
        }
      });
    });
  }
}

class Barista {
  constructor() {
    this.workingCount = 0;
  }

  makingCoffe(BQ) {
    if (this.workingCount > 1) {
    }
  } // 무슨 커피 만들어졌는지 로그
}
module.exports = { Cashier, Mannager, Barista };

// async checkSchdule(Q, BQ) {
//   manager.interval.on("manage", () => {
//     const checked = Q.splice(0, Q.length);
//     this.sendOrder(checked, BQ);
//     this.checkSchdule(Q, BQ);
//   });
//   const answer = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const checked = Q.splice(0, Q.length);
//       resolve(checked);
//     }, 1000);
//   });
//   this.sendOrder(await answer, BQ);
//   this.checkSchdule(Q, BQ);
// }
// sendOrder(managerQ, baristaQ) {
//   managerQ.forEach((element) => {
//     for (let i = 0; i < element[1]; i++) {
//       baristaQ.push(element[0]);
//     }
//   });
//   console.log(baristaQ);
// } //주문이 있을 경우 바리스타에게 작업 이벤트를 전달한다
