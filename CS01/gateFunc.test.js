const gateFunc = require("./gateFunc.js");

test("and 게이트", () => {
  expect(gateFunc.andGate(true, true)).toBe(true);
  expect(gateFunc.andGate(true, false)).toBe(false);
  expect(gateFunc.andGate(false, true)).toBe(false);
  expect(gateFunc.andGate(false, false)).toBe(false);
});

test("or 게이트", () => {
  expect(gateFunc.orGate(true, true)).toBe(true);
  expect(gateFunc.orGate(true, false)).toBe(true);
  expect(gateFunc.orGate(false, true)).toBe(true);
  expect(gateFunc.orGate(false, false)).toBe(false);
});

test("dec2bin toEqaul사용해보기", () => {
  expect(gateFunc.dec2bin(2)).toStrictEqual([0, 1]);
  expect(gateFunc.dec2bin(5)).toStrictEqual([1, 0, 1]);
});
// 배열 테스트시 toEqual을 사용해야함 toStrictEqual을 더 추천하는데
// toStrictEqual은 깊은복사임(엄격한 테스트!)
