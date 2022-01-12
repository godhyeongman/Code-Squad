const nums = [3, 3];
const target = 6;

var twoSum = function (nums, target) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (j == i) {
        continue;
      }
      if (temp + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
// 성공

const x = 1534236469;
function reverse(x) {
  let check = 1;
  if (x < 0) {
    check = -1;
    x = x * -1;
  }

  x = String(x).split("").reverse();
  const arrLength = x.length;
  while (true) {
    if (x[0] != "0") {
      x = x.join("") * check;
      break;
    } else if (x[0] == 0) {
      x.splice(0, 1);
    }
  }

  if (x >= 2 ** 31 - 1) {
    return 0;
  } else if (x <= 2 ** 31 * -1) {
    return 0;
  }
  return x;
}
console.log(reverse(x));

const head = [1, 1, 2];
function deleteDuplicates(head) {
  const answer = [];
  for (let i = 0; i < head.length; i++) {
    const check = head[i];
    for (let j = 0; j < head.length; j++) {
      if (j > i && head[j] == check) {
        head.splice(j, 1);
      }
    }
  }
  for (let k = 0; k < head.length; k++) {
    answer.push(head[k]);
  }
  return answer;
}
console.log(deleteDuplicates(head));

// 뒤집기 하면서 짜본 코드

// 4차
// let check = 1;
// if (x > 0) {
//     check = -1;
//     x = x * -1;
// }

// x = String(x).split("").reverse();
// const arrLength = x.length;
// while (true) {
// if (x[0] != "0") {
//   x =  x.join("") * check;
//     break;
// } else if (x[0] == 0) {
//   x.splice(0, 1);
// }
// }
// if(x <= 2 ** 31 - 1){
//       return 0
// } else if(x >= 2 ** 31 * -1){
//       return 0
// }
// return x

// 3차
// let answer = 0;
// let checkminus = 1;
// if (x < 0) {
//   checkminus = -1;
//   x = x * -1;
// }
// while (x > 0) {
//   answer = answer * 10 + (x % 10);
//   x = parseInt(x / 10);
// }
// if (answer >= 2 ** 31 - 1) {
//   return 0;
// } else if (answer <= 2 ** 31 * -1) {
//   return 0;
// }
// return answer * checkminus;

// remove 1차 (vsc에선 정상작동 릿코드에서는 입력값과 리턴값 똑같음)
// for (let i = 0; i < head.length; i++) {
//     let check = head[i];
//     sameNum = [];
//     head.forEach((item, idx) => {
//       if (item === check) sameNum.push(idx);
//     });
//     sameNum.forEach((item, idx) => {
//       if (idx !== 0) {
//         head.splice(item, 1);
//       }
//     });
//   }
//   return head;
