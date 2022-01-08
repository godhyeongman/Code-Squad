const gateFunc = require("./gateFunc.js");

test("and 게이트", () => {
  expect(gateFunc.andGate(true, true)).toBe(false);
});

test("or 게이트", () => {
  expect(gateFunc.orGate(true, false)).toBe(true);
});
