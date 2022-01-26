const workerThreads = require("worker_threads");
const Scheduler = require("./program.js");
let thread1;
let thread2;
let thread3;

thread1 = new workerThreads(__dirname + "./multiThreads.js");
thread2 = new workerThreads(__dirname + "./multiThreads.js");
thread3 = new workerThreads(__dirname + "./multiThreads.js");
