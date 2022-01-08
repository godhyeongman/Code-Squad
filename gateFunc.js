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
<<<<<<< HEAD
  if (bitA && bitB) {
    return false;
  } else if (bitA || bitB) {
    return true;
  } else if (!bitA && !bitB) {
    return false;
  }
=======
  return (!bitA && bitB) || (bitA && !bitB);
>>>>>>> c0751481a4cd93b30ba0f8c3286d8e9591fb1cbc
}
// console.log(xorGate(false, true));
// console.log(notGate(false));
// console.log(andGate(true, false));

// 논리연산자로만 동작
// 합을 구하는 내부함수 구현(sum)
// 자리올림 내부함수 구현(carry)
// 입력을 두개받아 합과 자리올림을 배열로 리턴하는 함수 구현(halfAdder)

function sum(bitA, bitB) {
  return xorGate(bitA, bitB);
}

function carry(bitA, bitB) {
  if (andGate(bitA, bitB)) {
    return true;
  }
}

function halfAdder(bitA, bitB) {
  const answer = [sum(bitA, bitB), carry(bitA, bitB)];
  return answer;
}

function fullAdder(bitA, bitB, carry) {
  const abHalf = halfAdder(bitA, bitB);
  const sumCarryHalf = halfAdder(carry, abHalf[0]);
  return [sumCarryHalf[0], sumCarryHalf[1] || abHalf[1]];
}

// console.log(binaryCalc.sum(false, false));
// console.log(binaryCalc.carry(false, true));
// console.log(fullAdder(true, true, false));

function byteAdder(byteA, byteB) {
  let carryCount = false;
  const answer = byteA.map((item, idx) => {
    const adderArr = fullAdder(byteA[idx], byteB[idx], carryCount);
    carryCount = adderArr[1];
    return adderArr[0];
  });
  return answer;
}
// console.log(byteAdder([1, 1, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0, 1, 1]));
// 오류있음 물어보자 팀원들한테

//dec2bin

function dec2bin(decimal) {
  const answer = [];
  while (true) {
    const divideDecBy2 = (divideNum) => Math.floor(divideNum / 2);
    answer[divideDecBy2(decimal)] = decimal % 2;
    if (divideDecBy2(decimal) < 1) return answer;
    decimal = divideDecBy2(decimal);
    console.log(decimal);
  }
}
<<<<<<< HEAD
console.log(dec2bin(9));
=======
console.log(dec2bin(12));

function bin2dec(bin) {
  const squareRoot = bin.length;
}
// bin2dec([1, 0, 1]);
>>>>>>> c0751481a4cd93b30ba0f8c3286d8e9591fb1cbc
