const { stdout } = require("process");
const readline = require("readline");
const start = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Figure {
  constructor(coord) {
    this.coord = coord;
  }
  getPoint() {}
  getLine() {}
  getArea() {}
}

class Point extends Figure {
  constructor(coord) {
    super(coord);
  }
  getPoint() {
    const pointX = this.coord[0];
    const pointY = this.coord[1];
    return [pointX, pointY];
  }
}

class Line extends Figure {
  constructor(coord) {
    super(coord);
  }
  getLineLength() {
    const firstPoint = new Point(this.coord[0]).getPoint();
    const secondPoint = new Point(this.coord[1]).getPoint();
    const lineLength = Math.sqrt(
      (firstPoint[0] - secondPoint[0]) ** 2 +
        (firstPoint[1] - secondPoint[1]) ** 2
    );
    return lineLength;
  }
}

class Triangle extends Figure {
  constructor(coord) {
    super(coord);
  }
  getArea() {
    const firstLine = new Line([this.coord[0], this.coord[1]]).getLineLength(); // new 새로운 객체이 LIne을 불러 사용하였으므로 상속이 아닌 포함 관계
    const secondLine = new Line([this.coord[1], this.coord[2]]).getLineLength(); // 궁금한것? 포함관계로 객채를 생성해서 메서드를 사용하기와
    const thirdLine = new Line([this.coord[2], this.coord[0]]).getLineLength(); // static으로 특정 메서드를 뽑아와 사용 하는것중 어느것이 바람직 한것인가?
    const S = (firstLine + secondLine + thirdLine) / 2;

    const area = Math.sqrt(
      S * (S - firstLine) * (S * (S - secondLine)) * (S * (S - thirdLine))
    );
    return area;
  }
}

class Rectangle extends Figure {
  constructor(coord) {
    super(coord);
    this.height = null;
    this.width = null;
  }
  isRec() {
    // 사각형이 사각형이 맞는지를 판단하고 넓이까지 주고 길이와 높이를 저장하고 있는데 이는 단일 책임 원칙에 위배되지 않을까?
    const width =
      new Line([this.coord[1], this.coord[2]]).getLineLength() +
      new Line([this.coord[3], this.coord[0]]).getLineLength(); // 코드의 길이가 길어져서 보기 불편하다 생각하는데 이게 맞나?

    const height =
      new Line([this.coord[0], this.coord[1]]).getLineLength() +
      new Line([this.coord[2], this.coord[3]]).getLineLength();

    if (
      width / 2 === new Line([this.coord[1], this.coord[2]]).getLineLength() &&
      height / 2 === new Line([this.coord[0], this.coord[1]]).getLineLength() //뭔가 이상한느낌인데... static쓰고싶은데...포함관계...
    ) {
      this.width = width / 2;
      this.height = height / 2;
      return true;
    }
  }
  getArea() {
    this.isRec();
    return this.height * this.width;
  }
}

//(10,10)-(22,10)-(22,18)-(10,18)
// const test = new Rectangle([
//   [10, 10],
//   [22, 10],
//   [22, 18],
//   [10, 18],
// ]);

// console.log(test.getArea());
module.exports = { Point, Line, Triangle, Rectangle };
