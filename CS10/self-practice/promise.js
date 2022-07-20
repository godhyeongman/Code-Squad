"use strict";

//1. producer
// 새로운 프로미스가 생성될때 executor는 즉시 실행됨
const promise = new Promise((resolve, reject) => {
  console.log("자동 실행");
  let a;
  setTimeout(() => {
    a = "test";
    resolve("resolve"); // false여도 실행된다... 어떻게 resolve를 패스하고 에러처리를 할 수있을까?
    reject(new Error("이건 에러이다"));
  }, 2000);
});

//2. Consumer: then, catch, finaally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally("성공");
// 문제상황 node여서 그런지 .then이 console.log(실행하고 바로 종료되어버리네...)

//3. 프로미스 체이닝
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
