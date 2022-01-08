// 논리 게이트 구현

function andGate(bitA, bitB) {
  return bitA && bitB;
}

function orGate(bitA, bitB) {
  return bitA || bitB;
}

function nandGate(bitA, bitB) {
  return !andGate(bitA, bitB);
}
function xorGate(bitA, bitB) {
  return (!bitA && bitB) || (bitA && !bitB);
}
<<<<<<< HEAD

// 이진법 계산 기능구현
=======
// console.log(xorGate(false, false));
// console.log(notGate(false));
// console.log(andGate(true, false));

// 논리연산자로만 동작
>>>>>>> cbd4a0261a5c146e22e4c46d27d2c1d475bd3665

function sum(bitA, bitB) {
  return xorGate(bitA, bitB);
}

function carry(bitA, bitB) {
  return andGate(bitA, bitB);
}

function halfAdder(bitA, bitB) {
  const answer = [sum(bitA, bitB), carry(bitA, bitB)];
  return answer;
}

function fullAdder(bitA, bitB, carry) {
<<<<<<< HEAD
  const abHalf = halfAdder(bitA, bitB);
  const sumCarryHalf = halfAdder(carry, abHalf[0]);
  return [sumCarryHalf[0], orGate(sumCarryHalf[1], abHalf[1])];
=======
  const [firstSum, firstCarry] = halfAdder(bitA, bitB);
  const [secondSum, secondCarry] = halfAdder(carry, firstSum);
  const carryOut = orGate(firstCarry, secondCarry);
  return [secondSum, carryOut];
>>>>>>> cbd4a0261a5c146e22e4c46d27d2c1d475bd3665
}

//바이트 계산기

function byteAdder(byteA, byteB) {
  let carryCount = false;
<<<<<<< HEAD
  const answer = byteA.map((item, idx) => {
    const adderArr = fullAdder(byteA[idx], byteB[idx], carryCount);
    carryCount = adderArr[1];
    return adderArr[0];
  });
  if (carryCount === false) {
    answer.push(false);
  } else {
    answer.push(true);
=======
  const largeLength = Math.max(byteA.length, byteB.length);
  const answer = [];
  for (let i = 0; i < largeLength; i++) {
    const [byteSum, byteCarry] = fullAdder(byteA[i], byteB[i], carryCount);
    carryCount = byteCarry;
    answer.push(byteSum);
  }
  if (carryCount) {
    answer.push(carryCount);
>>>>>>> cbd4a0261a5c146e22e4c46d27d2c1d475bd3665
  }
  return answer;
}

<<<<<<< HEAD
// 10진수 2진수로
=======
// console.log(
//   byteAdder(
//     [true, true, false, true, true, false, true, false, false],
//     [true, false, true, true, false]
//   )
// );
>>>>>>> cbd4a0261a5c146e22e4c46d27d2c1d475bd3665

function dec2bin(decimal) {
  const answer = [];
  while (decimal > 1) {
    answer.push(decimal % 2);
    decimal = parseInt(decimal / 2);
  }
  answer.push(decimal);
  return answer;
}
<<<<<<< HEAD

function bin2dec(bin) {
  const answer = bin.reduce(
    (item, nextItem, idx) => item + nextItem * idx ** 2
  );
  return answer;
}

// bin2hex

function bin2hex(bin) {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let dec = bin2dec(bin);
  const answer = [];
  while (dec > 16) {
    answer.push(hexArr[dec % 16]);
    dec = parseInt(dec / 16);
  }
  answer.push(hexArr[dec % 16]);
  return answer;
}

const convertHex2dec = (hex) => {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let answer = 0;
  hexArr.forEach((item, idx) => {
    if (hex === item) answer = idx;
  });
  return answer;
};

function hex2bin(hex) {
  const hex2dec = [];
  hex.forEach((item) => {
    hex2dec.push(convertHex2dec(item));
  });
  const addDec = hex2dec.reduce((a, b) => a + b);
  return dec2bin(addDec);
}

function dec2bin2hex(decA, decB) {
  const binA = dec2bin(decA).map((item) => (item === 1 ? true : false));
  const binB = dec2bin(decB).map((item) => (item === 1 ? true : false));
  const addedByte = byteAdder(binA, binB); //여기까지는 오류 X
  const answer = bin2hex(addedByte);
  return answer;
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
console.log(dec2bin(9));
=======
console.log(dec2bin(12));
=======
// console.log(dec2bin(10));
>>>>>>> 980cb3130509b285f9e29c142eee3251ab7d84fb

function bin2dec(bin) {
  // 여기가 오류있네!!!!!!!!빼액
  const answer = bin.reduce((acc, curr, idx) => acc + curr * idx ** 2);
  return answer;
}
<<<<<<< HEAD
// bin2dec([1, 0, 1]);
>>>>>>> c0751481a4cd93b30ba0f8c3286d8e9591fb1cbc
=======
// console.log(bin2dec([1, 0, 1, 0, 0, 1]));

const convertHex2dec = (hex) => {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let answer = 0;
  hexArr.findIndex((item) => hex === item);
  return answer;
};

function hex2bin(hex) {
  const hex2dec = [];
  hex.forEach((item) => {
    hex2dec.push(convertHex2dec(item));
  });
  const addDec = hex2dec.reduce((a, b) => a + b);
  return dec2bin(addDec);
}
// console.log(hex2bin(["A", "B", 2, 5]));

function bin2hex(bin) {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let dec = bin2dec(bin);
  const answer = [];
  while (dec > 16) {
    answer.push(hexArr[dec % 16]);
    dec = parseInt(dec / 16);
  }
  answer.push(hexArr[dec % 16]);
  return answer;
}
// console.log(bin2hex([1, 0, 1, 1, 1]));

function dec2bin2hex(decA, decB) {
  const binA = dec2bin(decA).map((item) => (item === 1 ? true : false));
  const binB = dec2bin(decB).map((item) => (item === 1 ? true : false));
  const addedByte = byteAdder(binA, binB); //여기까지는 오류 X
  const answer = bin2hex(addedByte);
  return answer;
}
// console.log(dec2bin2hex(25, 12));

//////////////////////왜 두개의 결과가 29로 동일할까?///////////////////////
// console.log(bin2dec([true, false, true, true, true]));
// console.log(bin2dec([true, false, true, false, false, true]));
>>>>>>> 980cb3130509b285f9e29c142eee3251ab7d84fb
>>>>>>> cbd4a0261a5c146e22e4c46d27d2c1d475bd3665
