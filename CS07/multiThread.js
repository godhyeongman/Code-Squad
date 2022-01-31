const { workerData, parentPort } = require("worker_threads");

if (workerData.worker === 0) {
  workerData.worker = 1;
}

function getResult() {
  let task = 0;
  for (let i = 0; i < workerData.worker; i++) {
    if (workerData.currTask + task >= workerData.wholeTask) {
      return task;
    }
    task++;
  }
  return task;
}

const result = getResult();
parentPort.postMessage(result);
