// 백준 제출 내용
//1076번
// const input = require("fs").readFileSync("./1076.txt").toString().split("\r\n");
// const colorsValue = {
//   black: "0",
//   brown: "1",
//   red: "2",
//   orange: "3",
//   yellow: "4",
//   green: "5",
//   blue: "6",
//   violet: "7",
//   grey: "8",
//   white: "9",
// };

// console.log(
//   (colorsValue[[input[0]]] + colorsValue[[input[1]]]) *
//     10 ** colorsValue[input[2]]
// );

//1009번
// const input = require("fs").readFileSync("./1009.txt").toString().split("\r\n");

// const answer = input.map((item) => {
//   if (item.length === 1) return;
//   const [a, b] = item.split(" ");
//   let temp = a[a.length - 1];

//   for (let i = 0; i < +b - 1; i++) {
//     temp = String(+temp * a).split("");
//     temp = temp[temp.length - 1];
//   }

//   return temp;
// });
// console.log(answer.join("\n"));

// const input = require("fs").readFileSync("./1052.txt").toString().split("\r\n");
// for (let i = 0; i < input.length; i++) {
//   let [water, turn] = input[i].split(" ");
//   let need2buy = 0;

//   while (true) {
//     let dividingWater = water;
//     let count = 0;
//     while (true) {
//       if (dividingWater % 2) count++;
//       dividingWater = parseInt(dividingWater / 2);
//       if (dividingWater <= 0) break;
//     }
//     if (count <= turn) break;
//     water++;
//     need2buy++;
//   }
//   console.log(need2buy);
// }
