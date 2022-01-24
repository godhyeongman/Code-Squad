const isFactor = function (number, potentialFactor) {
  return number % potentialFactor == 0;
};

const factors = function (number) {
  const rootPod = Math.sqrt(number);
  const pod = Array(Math.floor(rootPod))
    .fill()
    .reduce((acc, curr, idx) => {
      if (isFactor(number, idx + 1)) {
        acc.add(number / (idx + 1));
        acc.add(idx + 1);
      }
      return acc;
    }, new Set());

  return pod;
};

const isPerfect = function (number) {
  return sum(factors(number)) - number == number;
};

const isAbundant = function (number) {
  return sum(factors(number)) - number > number;
};

const isDeficient = function (number) {
  return sum(factors(number)) - number < number;
};

const sum = function (factors) {
  return [...factors].reduce((acc, curr) => acc + curr);
};

module.exports = { isFactor, factors, sum, isPerfect, isDeficient, isAbundant };
