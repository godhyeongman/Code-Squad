let first = null;
let second = null;
let third = null;
const arr = [];
const answer = [];

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    first = `${i} x ${j} =${i * j}`;

    second = `${i + 1} x ${j} =${i + 1 * j}`;

    third = `${i + 2} x ${j} =${i + 2 * j}`;

    if (i === j) {
      first = "        ";
    }
    if (i + 1 === j) {
      second = "        ";
    }
    if (i + 2 === j) {
      second = "        ";
    }
    console.log(`${first}   ${second}   ${third}`);
  }
}
