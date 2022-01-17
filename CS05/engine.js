class Memory {
  constructor() {
    this.heapSize = null;
    this.stackSize = null;
    this.heapStorage = [];
    this.stackStorage = [];
    this.typeStorage = {};

    this.addresscount = 0;
  }

  init(stackSize, heapSize) {
    this.stackSize = stackSize;
    this.heapSize = heapSize;
    return [0, stackSize + heapSize]; // 양 사이즈 의 끝이 stack의 기본주소 시작은 heap기본주소
  }

  setSize(type, length) {
    this.typeStorage[type] = length;
  }

  malloc(type, count) {
    if (this.typeStorage[type]) {
      for (let i = 0; i < count; i++) {
        const data = new Data(type, this.addresscount + this.typeStorage[type]);
        this.addresscount += this.typeStorage[type];
        this.heapStorage.unshift(data);
        this.stackStorage.push(data.address);
      }
    }
  }
}

class Data {
  constructor(type, address) {
    this.type = type;
    this.address = address;
  }
}

const test = new Memory();
test.setSize("int", 4);
test.malloc("int", 2);
console.log(test.heapStorage, test.stackStorage);
