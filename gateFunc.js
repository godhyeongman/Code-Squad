function andGate(bitA, bitB) {
  if (bitA && bitB) {
    return true;
  } else {
    return false;
  }
}

function orGate(bitA, bitB) {
  if (bitA || bitB) {
    return true;
  } else {
    return false;
  }
}

function notGate(bit) {
  if (bit) {
    return false;
  } else if (!bit) {
    return true;
  }
}

function nandGate(bitA, bitB) {
  if (bitA && bitB) {
    return false;
  } else {
    return true;
  }
}

function xorGate(bitA, bitB) {
  if (bitA && bitB) {
    return false;
  } else if (bitA || bitB) {
    return true;
  } else if (!bitA && !bitB) {
    return false;
  }
}
// console.log(xorGate(false, true));
// console.log(notGate(false));
// console.log(andGate(true, false));

// 논리연산자로만 동작
// 합을 구하는 내부함수 구현(sum)
// 자리올림 내부함수 구현(carry)
// 입력을 두개받아 합과 자리올림을 배열로 리턴하는 함수 구현(halfAdder)

const binaryCalc = {
  sum(bitA, bitB) {
    return xorGate(bitA, bitB);
  },
  carry(bitA, bitB) {
    if (andGate(bitA, bitB)) {
      return true;
    }
    return false;
  },
  halfAdder(bitA, bitB) {
    const answer = [this.sum(bitA, bitB), this.carry(bitA, bitB)];
    return answer;
  },
  fullAdder(bitA, bitB, carry) {
    const bitSum = this.halfAdder(bitA, bitB)[0];
    const bitCarr = this.halfAdder(bitA, bitB)[1];
    const fullSum = this.halfAdder(carry, bitSum)[0];
    const fullCarr = this.halfAdder(carry, bitSum)[1];
    const fullBitCarr = orGate(bitCarr, fullCarr);
    const answer = [fullSum, fullBitCarr];
    return answer;
  },
};

// console.log(binaryCalc.sum(false, false));
// console.log(binaryCalc.carry(false, true));
// console.log(binaryCalc.fullAdder(true, false, true));

function byteadder(byteA, byteB) {
  const answer = [];
  let carryCount = false;
  for (let i = 0; i < byteA.length; i++) {
    if (carryCount) {
      const fullAddArr = binaryCalc.fullAdder(byteA[i], byteB[i], carryCount);
      carryCount = false;
      answer.push(fullAddArr[0]);
      if (fullAddArr[1]) carryCount = true;
    } else if (!carryCount) {
      const addArr = binaryCalc.halfAdder(byteA[i], byteB[i]);
      answer.push(addArr[0]);
      if (addArr[1]) carryCount = true;
    }
  }
  console.log(answer);
  return answer;
}
// byteadder([true, true, 0, 0], [1, 1, 0, 0]);

//dec2bin

function dec2bin(decimal) {
  const answer = [0];
  for (let i = 0; i < decimal; i++) {
    answer[0]++;
    answer.forEach((item, idx) => {
      if (item > 1) {
        answer[idx] = 0;
        if (answer.length === idx + 1) {
          answer.push(0);
          answer[idx + 1]++;
        } else {
          answer[idx + 1]++;
        }
      }
    });
  }

  return answer;
}
console.log(dec2bin(9));
