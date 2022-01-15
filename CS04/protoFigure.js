const readline = require("readline");
const start = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Figure(point) {
  this.name = null;
  this.pointLength = point.length;
  this.point = point;
  this.area = null;
}

function Line() {
  Figure.apply(this, arguments);
}

Line.prototype = Object.create(Figure.prototype);
Line.prototype.constructor = Line;

Line.prototype.getLine = function (A, B) {
  const getLineLength = Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2);
  return (this.area = getLineLength);
};

function Triangle() {
  Figure.apply(this, arguments);
}

Triangle.prototype = Object.create(Line.prototype); // Triangle 에 Line의 프로토 타입만 상속
Triangle.prototype.constructor = Triangle; // Triangle 의 constructor가 상속으로 인해 바뀌어서 다시 변화
// Triangle 상속이 끝났으므로 다시 덮어질일이 없으니 메서드 삽입
Triangle.prototype.getArea = function () {
  const first = this.getLine(this.point[0], this.point[1]);
  const second = this.getLine(this.point[1], this.point[2]);
  const third = this.getLine(this.point[2], this.point[0]);
  const S = (first + second + third) / 2;
  const getTriangleArea = Math.sqrt(
    S * (S - first) * (S * (S - second)) * (S * (S - third))
  );
  return (this.area = getTriangleArea);
};

function Square() {
  Figure.apply(this, arguments);
}

Square.prototype = Object.create(Line.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
  const first = this.getLine(this.point[0], this.point[1]);
  const second = this.getLine(this.point[1], this.point[2]);
  const third = this.getLine(this.point[2], this.point[3]);
  const fourth = this.getLine(this.point[3], this.point[0]);

  if (first !== third || second !== fourth) {
    return console.log("직사각형이 아닙니다!");
  }
  const squareArea = first * second;
  return (this.area = squareArea);
};

function ShapeFactroy() {}

const a = new Line([0, 1]);
const b = new Triangle([
  [1, 1],
  [3, 6],
  [9, 4],
]);
const c = new Square([
  [10, 10],
  [22, 10],
  [22, 18],
  [10, 18],
]); //(10,10)-(22,10)-(22,18)-(10,18)

// console.log(b.getArea());
// console.log(c.getArea());

start.question("점을 입력하세요. > ", (input) => {
  const splitDash = input.split("-").map((item) => item.split(","));
  let shape;
  if (splitDash == 2) {
    shape = "line";
  } else if (splitDash == 3) {
    shape = "triangle";
  } else if (splitDash == 4) {
    shape = "square";
  } else if (splitDash > 4) {
    shape = "polygon";
  }
  shape = new Figure(splitDash);
  start.close();
});
