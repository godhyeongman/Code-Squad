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

// 이진법 계산 기능구현

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
  return [secondSum, orGate(firstCarry, secondCarry)];
}

//바이트 계산기

const makeByteSame = (A, B) => {
  const biggerlength = Math.max(A.length, B.length);
  for (let i = 0; i <= biggerlength; i++) {
    if (A.length < i) A.push(false);
    if (B.length < i) B.push(false);
  }
  return [A, B];
};

function byteAdder(byteA, byteB) {
  let carryCount = false;
  const answer = [];
  [byteA, byteB] = makeByteSame(byteA, byteB);
  for (let i = 0; i < byteA.length; i++) {
    let [sum, carry] = fullAdder(byteA[i], byteB[i], carryCount);
    answer.push(sum);
    carryCount = carry;
  }
  answer.push(carryCount);
  return answer;
}
// console.log(byteAdder([true, false, true], [true, true, true]));

// 10진수 2진수로

function dec2bin(decimal) {
  const answer = [];
  while (decimal > 1) {
    answer.push(decimal % 2);
    decimal = parseInt(decimal / 2);
  }
  answer.push(decimal);
  return answer;
}

// 오류 발견 !!!!!!!
function bin2dec(bin) {
  const answer = bin.reduce((acc, currItem, idx) => {
    return acc + currItem * 2 ** idx;
    // 문제 해결!!!!!! currItem * idx ** 2 ---> currItem * 2 ** idx 가 맞는거임 idx^2 가아닌 2^idx
  });
  return answer;
}

// bin2hex

function bin2hex(bin) {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let dec = bin2dec(bin);
  console.log(dec);
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
  hexArr.forEach((acc, idx) => {
    if (hex === acc) answer = idx;
  });
  return answer;
};

function hex2bin(hex) {
  const hex2dec = [];
  hex.forEach((acc) => {
    hex2dec.push(convertHex2dec(acc));
  });
  const addDec = hex2dec.reduce((a, b) => a + b);
  return dec2bin(addDec);
}

function dec2bin2hex(decA, decB) {
  const binA = dec2bin(decA).map((acc) => (acc === 1 ? true : false));
  const binB = dec2bin(decB).map((acc) => (acc === 1 ? true : false));
  const addedByte = byteAdder(binA, binB); //여기까지는 오류 X
  const answer = bin2hex(addedByte);
  return answer;
}
// console.log(dec2bin2hex(5, 17));

const exportedFun = { andGate: andGate, orGate: orGate, dec2bin: dec2bin };
module.exports = exportedFun;
