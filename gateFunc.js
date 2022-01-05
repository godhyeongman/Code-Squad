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
// console.log(xorGate(false, false));
// console.log(notGate(false));
// console.log(andGate(true, false));

// 논리연산자로만 동작

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
  const [firstSum, firstCarry] = halfAdder(bitA, bitB);
  const [secondSum, secondCarry] = halfAdder(carry, firstSum);
  const carryOut = orGate(firstCarry, secondCarry);
  return [secondSum, carryOut];
}

// console.log(binaryCalc.sum(false, false));
// console.log(binaryCalc.carry(false, true));
// console.log(fullAdder(true, true, false));

function byteAdder(byteA, byteB) {
  let carryCount = false;
  const largeLength = Math.max(byteA.length, byteB.length);
  const answer = [];
  for (let i = 0; i < largeLength; i++) {
    const [byteSum, byteCarry] = fullAdder(byteA[i], byteB[i], carryCount);
    carryCount = byteCarry;
    answer.push(byteSum);
  }
  if (carryCount) {
    answer.push(carryCount);
  }
  return answer;
}

// console.log(
//   byteAdder(
//     [true, true, false, true, true, false, true, false, false],
//     [true, false, true, true, false]
//   )
// );

function dec2bin(decimal) {
  const answer = [];
  while (decimal > 1) {
    answer.push(decimal % 2);
    decimal = parseInt(decimal / 2);
  }
  answer.push(decimal);
  return answer;
}
// console.log(dec2bin(10));

function bin2dec(bin) {
  // 여기가 오류있네!!!!!!!!빼액
  const answer = bin.reduce((acc, curr, idx) => acc + curr * idx ** 2);
  return answer;
}
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
