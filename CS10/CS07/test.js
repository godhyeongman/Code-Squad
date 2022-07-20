let first;
let second;
let third;
let count = 1;
for (let i = 0; i < 3; i++) {
  for (let j = 1; j < 10; j++) {
    if (count === j) {
      first = "         ";
    } else {
      first = `${count} x ${j} = ${count * j}`;
    }

    if (j % (count + 1) === 0 && count + 1 === j) {
      second = "         ";
    } else {
      second = `${count + 1} x ${j} = ${(count + 1) * j}`;
    }

    if (j % (count + 2) === 0 && count + 2 === j) {
      third = "         ";
    } else {
      third = `${count + 2} x ${j} = ${(count + 2) * j}`;
    }

    if (count === 1) {
      first = "         ";
    }
    console.log(`${first}  ${second}  ${third}`);
    if (j === 9) {
      console.log("\n");
    }
  }
  count += 3;
}

// for (let i = 1; i < 4; i++) {
//   for (let j = 1; j < 10; j++) {
//     if (i === j) {
//       first = "         ";
//     } else if (i !== j) {
//       first = `${i} x ${j} = ${i * j}`;
//     }

//     if (i + 3 === j) {
//       second = "         ";
//     } else if (i + 3 !== j) {
//       second = `${i + 3} x ${j} = ${(i + 3) * j}`;
//     }

//     if (i + 6 === j) {
//       third = "         ";
//     } else if (i + 6 !== j) {
//       third = `${i + 6} x ${j} = ${(i + 6) * j}`;
//     }

//     console.log(first + "  " + second + "  " + third);
//   }
// }
