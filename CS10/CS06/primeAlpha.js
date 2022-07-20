const { isFactor, factors } = require("./classifierAlpha.js");

const isPrime = function (number) {
  return number > 1 && equalSet(factors(number), new Set([1, number]));
};

const equalSet = function (aset, bset) {
  const checkEqual = [...aset].filter((item) => {
    if ([...bset].includes(item)) return item;
  });
  return aset.size === bset.size && checkEqual.length === bset.size;
};

module.exports = { equalSet, isPrime };
