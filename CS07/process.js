class ProcessA {
  constructor() {
    this.name = "ProcessA";
    this.statement = "ready";
    this.wholeTask = null;
    this.currTask = 0; // PCB => 원래는 커널의 데이터 영역에 존재하며 각각의 프로세스마다 고유의 PCB가 존재하는데 우선은 이런식으로
  }
}

class ProcessB {
  constructor() {
    this.name = "ProcessB";
    this.statement = "ready";
    this.wholeTask = null;
    this.currTask = 0;
  }
}

class ProcessC {
  constructor() {
    this.name = "ProcessC";
    this.statement = "ready";
    this.wholeTask = null;
    this.currTask = 0;
  }
}

class ProcessD {
  constructor() {
    this.name = "ProcessD";
    this.statement = "ready";
    this.wholeTask = null;
    this.currTask = 0;
  }
}

module.exports = { ProcessA, ProcessB, ProcessC, ProcessD };
