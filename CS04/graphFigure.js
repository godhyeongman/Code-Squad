// // 필요한 코드 입력처리, 그래프 관련 함수(메인 메서드),
// const readline = require("readline");
// const start = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// 입력받기
function CheckInput(inputLength, arr) {
  if (inputLength == 2) {
    this.name = "line";
    this.value = arr;
  } else if (inputLength == 3) {
    this.name = "triangle";
    this.value = arr;
  } else if (inputLength == 4) {
    this.name = "square";
    this.value = arr;
  }
}

//interface역활
const areaAndLength = {
  lineLength(A, B) {
    const getLineLength = Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2);
    return getLineLength;
  },

  triangleArea(A, B, C) {
    const S = (A + B + C) / 2;
    const getTriangleArea = Math.sqrt(
      S * (S - A) * (S * (S - B)) * (S * (S - C))
    );
    return getTriangleArea;
  },
  squareArea(A, B, C, D) {
    const height = A;
    const width = B;
    const getSquareArea = height * width;
    return getSquareArea;
  },
};

const inputAndOutput = {
  CheckInput(inputLength, arr) {
    if (inputLength == 2) {
      this.name = "line";
      this.value = arr;
    } else if (inputLength == 3) {
      this.name = "triangle";
      this.value = arr;
    } else if (inputLength == 4) {
      this.name = "square";
      this.value = arr;
    }
  },
  calculate(obj) {
    if (obj.name == "line") {
      return new Line(obj.value);
    } else if (obj.name == "triangle") {
      return new Triangle(obj.value);
    } else if (obj.name == "square") {
      return new Square(obj.value);
    }
  },
};

// 도형 생성자
function Line(doublePoint) {
  const A = doublePoint[0];
  const B = doublePoint[1];
  this.lineLength = this.lineLength(A, B);
}

function Triangle(threePoint) {
  const A = this.lineLength(threePoint[0], threePoint[1]);
  const B = this.lineLength(threePoint[1], threePoint[2]);
  const C = this.lineLength(threePoint[2], threePoint[0]);
  this.area = this.triangleArea(A, B, C);
}

function Square(fourPoint) {
  const lines = [];

  for (let i = 0; i < fourPoint.length; i++) {
    if (i == fourPoint.length - 1) {
      lines.push(this.lineLength(fourPoint[i], fourPoint[0]));
      break;
    }
    lines.push(this.lineLength(fourPoint[i], fourPoint[i + 1]));
  }

  if (lines[0] !== lines[2] && lines[1] !== lines[3]) {
    return console.log("직사각형이 아닙니다!");
  }
}

Line.prototype = areaAndLength;
Triangle.prototype = areaAndLength;
Square.prototype = areaAndLength;

// start.question("점을 입력하세요. > ", (input) => {
//   const splitDash = input.split("-").map((item) => item.split(","));
//   const inputLength = input.length;
//   const figure = inputAndOutput.checkInput(inputLength, splitDash);
//   const answer = inputAndOutput.calculate(figure);

//   start.close();
// });
