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
  const abHalf = halfAdder(bitA, bitB);
  const sumCarryHalf = halfAdder(carry, abHalf[0]);
  return [sumCarryHalf[0], orGate(sumCarryHalf[1], abHalf[1])];
}

//바이트 계산기

function byteAdder(byteA, byteB) {
  let carryCount = false;
  const answer = byteA.map((item, idx) => {
    const adderArr = fullAdder(byteA[idx], byteB[idx], carryCount);
    carryCount = adderArr[1];
    return adderArr[0];
  });
  if (carryCount === false) {
    answer.push(false);
  } else {
    answer.push(true);
  }
  return answer;
}

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
