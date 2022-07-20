const {
  isFactor,
  factors,
  sum,
  isPerfect,
  isDeficient,
  isAbundant,
} = require("./classifierAlpha.js");
const { equalSet, isPrime } = require("./primeAlpha.js");

function checkNumber() {}

const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce((acc, fn) => [fn.call(null, ...acc)], args)[0];
  };
};

const a = (num1, num2) => num1 + num2;
const b = (num) => num * -1;
const test = pipe(a, b);
console.log(test(3, 6));
