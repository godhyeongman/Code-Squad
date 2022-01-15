class Figure {
  constructor(coord) {
    this.coord = coord;
    this.line = null;
  }
  static getLineLength() {}
  //도형들이 뭘가지고 있을까?(필수요소)
}

class Line {
  constructor(coord) {
    super(coord);
  }
  getLineLength() {
    const A = this.coord[0];
    const B = this.coord[1];
    return Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2);
  }
  getArea() {
    return console.log("선은 길이만 존재합니다.");
  }
}
