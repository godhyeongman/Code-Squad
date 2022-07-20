const { Process } = require("./process.js");
const { Worker } = require("worker_threads");
const { resolve } = require("path");
const { rejects } = require("assert");
class Scheduler {
  constructor() {
    this.readyQue = this.LongTermScheduling(); // create시 바로 readyQue로 이동됨
    // this.waitingQue = []; // 요건 나중에 인터럽트 필요하면하자
    this.taskTime = this.readyQue.reduce((acc, curr) => {
      acc += curr.wholeTask;
      return acc;
    }, 0);
    this.terminate = [];
    this.processA = this.readyQue.find((item) => item.id === 0);
    this.processB = this.readyQue.find((item) => item.id === 1);
    this.processC = this.readyQue.find((item) => item.id === 2);
  }

  create() {
    const createdProcess = [];
    for (let i = 0; i < 3; i++) {
      const newProcess = new Process();
      newProcess.id = i;
      createdProcess.push(newProcess);
    }
    return createdProcess;
  }

  LongTermScheduling() {
    let processTime = 20; // 총작업 시간
    const noTaskProcess = this.create();
    const createdProcess = noTaskProcess.map((item, idx) => {
      const randTime = Math.floor(Math.random() * (processTime - 1)) + 1;
      item.wholeTask = randTime;
      if (idx === 2) item.wholeTask = processTime;
      processTime -= randTime;
      return item;
    });
    return createdProcess;
  }

  setWorker() {
    this.processA.worker = parseInt(this.processA.wholeTask / 2);
    this.processB.worker = parseInt(this.processB.wholeTask / 2);
    this.processC.worker = parseInt(this.processC.wholeTask / 2);
  }

  workOut(process) {
    for (let i = 0; i < process.worker; i++) {
      // return new Promise((resolve, rejects) => {
      //   const worker = new Worker("./multiThread.js", { workerData: process });
      //   worker.on("message", resolve);
      // });
      const worker = new Worker("./multiThread.js", { workerData: process });
      return worker.on("message");
    }
  }

  async run() {
    this.readyQue[0].currTask += await this.workOut(this.readyQue[0]);
    console.log(this.workOut(this.readyQue[0]));
  }

  checkDone(process) {
    if (process.currTask === process.wholeTask) {
      const taskDone = this.readyQue.shift();
      process.statement = "terminated";
      this.terminate.push(taskDone);
    } else if (!process) {
      return;
    }
  }

  preempt() {
    const preempt = this.readyQue.shift();
    preempt.statement = "waiting";
    this.readyQue.push(preempt);
  }

  showTask() {
    console.log(
      `A: ${this.processA.statement}, ${this.processA.currTask} \nB: ${this.processB.statement}, ${this.processB.currTask} \nC: ${this.processC.statement}, ${this.processC.currTask} \n`
    );
  }

  chageStatementWait() {
    this.processA.statement = "waiting";
    this.processB.statement = "waiting";
    this.processC.statement = "waiting";
  }

  start() {
    this.showTask();
    console.log(
      this.processA.wholeTask,
      this.processB.wholeTask,
      this.processC.wholeTask
    );
    this.chageStatementWait();
    for (let i = 0; i < this.taskTime; i++) {
      setTimeout(() => {
        this.readyQue[0].statement = "running";
        this.run();
        this.showTask();
        this.preempt();
        this.checkDone(this.readyQue[0]);
        if (this.readyQue.length === 0) {
          console.log(this.readyQue);
          this.showTask();
          console.log("모든작업이 끝났습니다."); // 이부분도 마음에 안든다
          return;
        }
      }, 1000 * (i + 1));
    }
  }
}

const test = new Scheduler();
test.setWorker();
console.log(test.processA.worker, test.processB.worker, test.processC.worker);
test.start();

module.exports = Scheduler;
