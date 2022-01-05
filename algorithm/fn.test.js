const fn = require("./fn");
console.log(fn);
test("", () => {
  expect(1).toBe(1);
});

//expect에 실험값(함수,논리식등등..)
//.toBe에  기대값
test("2 더하기 3 = 5 ?", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3 = 5 ?", () => {
  expect(fn.add(3, 3)).toBe(5);
});
