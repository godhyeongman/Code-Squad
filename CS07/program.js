const { ProcessA, ProcessB, ProcessC, ProcessD } = require("./process.js");

class Program {
  constructor() {
    this.readyQue = this.LongTermScheduling(); // create시 바로 readyQue로 이동됨
    // this.waitingQue = [];
    this.TaskTime = null;
  }
  create() {
    const randProcess = [
      new ProcessA(),
      new ProcessB(),
      new ProcessC(),
      new ProcessD(),
    ];
    const createdProcess = [];
    for (let i = 0; i < 3; i++) {
      const randNum = Math.floor(Math.random() * randProcess.length);
      const newProcess = [...randProcess][randNum];
      createdProcess.push(newProcess);
      randProcess.splice(randNum, 1);
    }
    return createdProcess;
  }

  LongTermScheduling() {
    let processTime = 20; // 총작업 시간
    const noTaskProcess = this.create();

    const createdProcess = noTaskProcess.map((item, idx) => {
      // 시분할
      const randTime = Math.floor(Math.random() * processTime);
      item.wholeTask = randTime;
      if (idx === 2) item.wholeTask = processTime;
      processTime -= randTime;
      return item;
    });
    return createdProcess;
  }

  //   shortTermScheduling() {
  //     this.readyQue.sort((a, b) => a.wholeTask - b.wholeTask); // 이런 방식으로는
  //     this.run(this.readyQue[0]);
  //   }

  run(task) {
    setTimeout(() => {
      task.currTask++;
      const a = this.readyQue.shift();
      console.log(a);
      this.readyQue.push(a);
      console.log(this.readyQue);
    }, 1000);
  }

  showTask() {
    console.log(`${d}`);
  }
  start() {}

  terminate() {}
}

const test = new Program();
test.shortTermScheduling();
