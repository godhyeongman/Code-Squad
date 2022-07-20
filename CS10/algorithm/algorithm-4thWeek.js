"use strict";

function diagonalDifference(arr) {
  const a = [...arr].reduce((acc, curr, idx) => {
    acc += curr[idx];
    return acc;
  }, 0);

  const b = [...arr].reduce((acc, curr, idx) => {
    acc += curr[curr.length - (idx + 1)];
    return acc;
  }, 0);
  let answer = a - b;
  if (a - b < 0) answer = (a - b) * -1;
  return answer;
}

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

// 코드 진짜 맘에 안드네
function timeConversion(s) {
  let daytime;
  const splitS = s.split(":").map((item, idx) => {
    item = item.split("");
    if (idx === 2) {
      daytime = item.splice(item.length - 2, 2).join("");
    }
    return item.join("");
  });
  if (splitS[0] === "12") splitS[0] = String(+splitS[0] - 12);
  if (daytime == "PM") {
    splitS[0] = String(+splitS[0] + 12);
  }
  if (splitS[0] === "0") splitS[0] += "0";
  return splitS.join(":");
}

// console.log(timeConversion("06:40:03AM"));

function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return "NO";
  while (true) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return "YES";
    if (x2 < x1) return "NO";
  }
}

// console.log(kangaroo(0, 3, 4, 2));

// function saveThePrisoner(n, m, s) {
//   let answer;
//   answer = (m % n) + (s - 1);
//   return answer;
// }  이론적으로 말이 되는데 S가 죄수수보다 큰경우가 있따.

function saveThePrisoner(n, m, s) {
  let answer;
  answer = ((m % n) + (s - 1)) % n;
  if (answer === 0) answer = n;
  return answer;
}
console.log(saveThePrisoner(352926151, 380324688, 94730870));
console.log(saveThePrisoner(368127406, 680428368, 105517295));
console.log(saveThePrisoner(7, 19, 2));
console.log(saveThePrisoner(3, 7, 3));
