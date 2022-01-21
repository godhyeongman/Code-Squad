const isFactor = function (number, potentialFactor) {
  return number % potentialFactor == 0;
};

const factors = function (number, isFactor) {
  const rootPod = Math.sqrt(number);
  const pod = Array(Math.floor(rootPod))
    .fill()
    .reduce((acc, curr, idx) => {
      if (isFactor(number, idx + 1)) {
        if (number / (idx + 1) !== number) {
          acc.add(number / (idx + 1));
        }
        acc.add(idx + 1);
      }
      return acc;
    }, new Set());

  return pod;
};

const isPerfect = function (sum, factors, number, isFactor) {
  return sum(factors(number, isFactor)) == number;
};

const isAbundant = function (sum, factors, number, isFactor) {
  return sum(factors(number, isFactor)) > number;
};

const isDeficient = function (sum, factors, number, isFactor) {
  return sum(factors(number, isFactor)) < number;
};

const sum = function (factors) {
  return [...factors].reduce((acc, curr) => acc + curr);
};

console.log(isFactor(10, 2));
console.log(factors(10, isFactor));
console.log(sum(factors(10, isFactor)));
console.log(isAbundant(sum, factors, 10, isFactor));
console.log(isPerfect(sum, factors, 10, isFactor));
console.log(isDeficient(sum, factors, 10, isFactor));

module.exports = { isFactor, factors, sum, isPerfect, isDeficient, isAbundant };
