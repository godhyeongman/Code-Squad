const readline = require("readline");
const start = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 생성자
function Figure(point) {
  this.name = null;
  this.pointLength = point.length;
  this.point = point;
  this.area = null;
}

// 선길이
Figure.prototype.line = function (A, B) {
  const getLineLength = Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2);
  return (this.area = getLineLength);
};

// 삼각형 길이
Figure.prototype.triangleArea = function () {
  const first = this.line(this.point[0], this.point[1]);
  const second = this.line(this.point[1], this.point[2]);
  const third = this.line(this.point[2], this.point[3]);
  const S = (first + second + third) / 2;
  const getTriangleArea = Math.sqrt(
    S * (S - first) * (S * (S - second)) * (S * (S - third))
  );
  return (this.area = getTriangleArea);
};

// 사각형 길이
Figure.prototype.squareArea = function () {
  const first = this.line(this.point[0], this.point[1]);
  const second = this.line(this.point[1], this.point[2]);
  const third = this.line(this.point[2], this.point[3]);
  const fourth = this.line(this.point[3], this.point[0]);

  if (first !== third || second !== fourth) {
    return console.log("직사각형이 아닙니다!");
  }
  const squareArea = first * second;
  return (this.area = squareArea);
};

// 다각형 길이(예정)
Figure.prototype.polygonArea = function () {};

// 이름에 따른 함수호출
Figure.prototype.checkFigure = function () {
  if (this.name === "line") {
    this.line(this.firstPoint, this.secondPoint);
  } else if (this.name === "triangle") {
    this.triangleArea();
  } else if (this.name === "square") {
    this.squareArea();
  } else if (this.name === "polygon") {
    this.polygonArea();
  }
};

// 이름지정
Figure.prototype.checkFigureName = function () {
  if (this.pointLength == 2) {
    this.name = "line";
  } else if (this.pointLength == 3) {
    this.name = "triangle";
  } else if (this.pointLength == 4) {
    this.name = "square";
  } else if (this.pointLength > 4) {
    this.name = "polygon";
  }
};

// 단계별 이름지정 -> 이름확인 및 호출 -> 출력
Figure.prototype.logData = function () {
  this.checkFigureName();
  this.checkFigure();
  console.log(`${this.name}의 넓이는 ${this.area}`);
  return;
};

// 시작점

start.question("점을 입력하세요. > ", (input) => {
  const splitDash = input.split("-").map((item) => item.split(","));
  const answer = new Figure(splitDash);
  answer.logData();
  console.log(answer.prototype);
  start.close();
});
