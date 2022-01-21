const isFactor = function (number, potentialFactor) {
  return number % potentialFactor == 0;
};

const isPrime = function (number, equalSet, factors, isFactor) {
  const primeSet = new Set([1, number]);
  return this.number > 1 && equalSet(factors(number, isFactor), primeSet);
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

const equalSet = function (aset, bset) {
  const checkEqual = [...aset].filter((item) => {
    if ([...bset].includes(item)) return item;
  });
  if (aset.size !== bset.size || checkEqual.length !== bset.size) {
    return false;
  }

  return true;
};

module.exports = { equalSet, isPrime };
