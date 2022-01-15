class Figure {
  constructor(coord) {
    this.coord = coord;
    this.line = null;
    this.area = null;
  }

  //도형들이 뭘가지고 있을까?(필수요소)

  getPoint(A) {
    const x = A[0];
    const y = A[1];
    return [x, y];
  }
  getArea() {
    console.log("이 객체는 추상화 객체입니다.");
  }
}

class Line extends Figure {
  constructor(coord) {
    super(coord, line, area);
  }
  getLineLength(A, B) {
    const firstPoint = super.getPoint(A[0]);
    const secondPoint = super.getPoint(B[1]);
    const lineLength = Math.sqrt(
      (firstPoint[0] - secondPoint[0]) ** 2 +
        (firstPoint[1] - secondPoint[1]) ** 2
    );
    return lineLength;
  }
  getArea() {
    return console.log("선은 길이만 존재합니다.");
  }
}

class Triangle extends Figure {
  constructor(coord) {
    super(coord, line, area);
  }
  getArea() {
    const firstLine = new Line(
      super.getPoint(this.coord[0]),
      super.getPoint(this.coord[1])
    );
    const secondPoint = new Line(
      super.getPoint(this.coord[1]),
      super.getPoint(this.coord[2])
    );
    const thirdPoint = new Line(
      super.getPoint(this.coord[2]),
      super.getPoint(this.coord[0])
    );
  }
}
