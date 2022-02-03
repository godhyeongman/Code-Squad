const { workerData, parentPort } = require("worker_threads");
let result;
if (workerData.wholeTask - workerData.currTask === 1) {
  parentPort.postMessage(1);
  parentPort.close();
}

if (workerData.whole === 0) {
  result = 1;
} else {
  result = 2;
}

// function getResult() {
//   let task = 0;
//   for (let i = 0; i < workerData.worker; i++) {
//     if (workerData.currTask + task >= workerData.wholeTask) {
//       return task;
//     }
//     task++;
//   }
//   return task;
// }

// const result = getResult();
parentPort.postMessage(result);
