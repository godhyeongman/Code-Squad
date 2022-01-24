class Process {
  constructor() {
    this.id = null;
    this.statement = "ready";
    this.wholeTask = null;
    this.currTask = 0; // PCB => 원래는 커널의 데이터 영역에 존재하며 각각의 프로세스마다 고유의 PCB가 존재하는데 우선은 이런식으로
  }
}

module.exports = { Process };
