const Heap = require("./heap");
const Stack = require("./Stack");
class Memory {
  constructor() {
    this.heap = null;
    this.stack = null;
    this.typeStorage = { stack: 4 };
  }

  init(stackSize, heapSize) {
    const stack = new Stack(stackSize, heapSize + stackSize);
    const heap = new Heap(heapSize, 0);
    this.stack = stack;
    this.heap = heap;
    return { heapBaseAddress: 0, stackBaseAddress: stackSize + heapSize }; // 양 사이즈 의 끝이 stack의 기본주소 시작은 heap기본주소
  }

  setSize(type, length) {
    const lengthRule = [1, 2, 4, 8, 16, 32];

    if (this.typeStorage[type]) {
      return console.log("이미 존재 하는 타입 입니다.");
    } else if (!lengthRule.includes(length)) {
      return console.log("설정 크기에 오류가 있습니다.");
    } // if랑 else문을 쓰면  뭔가 객체지향이 아닌것 같지만 우선....

    this.typeStorage[type] = length;
  }

  malloc(type, count) {
    if (!this.typeStorage[type]) return console.log("타입이 없습니다.");

    const data = {
      type: type,
      address: this.stack.pointer,
    };

    for (let i = 0; i < count; i++) {
      if (data.address > this.stack.size) {
        return this.stack.size;
      }
      this.stack.storage.push(data);
    }
  }
}

const test = new Memory();

test.init(20, 20);
console.log(test.heap, test.stack);
test.setSize("int", 4);

// class Data {
//   constructor(type, address) {
//     this.type = type;
//     this.address = address;
//   }
// }

// class Stack {
//   constructor(type, address, pointer) {
//     this.type = type;
//     this.address = address;
//     this.pointer = pointer;
//   }
// }

// console.log(test.malloc("int", 2));
// console.log(test.usage());

// malloc(type, count) {
//   const stackedArr = [];
//   if (!this.typeStorage[type]) return console.log("타입이 없습니다.");

//   for (let i = 0; i < count; i++) {
//     const data = new Data(type, this.heapCount);
//     if (data.address + this.typeStorage[type] < this.heapSize) {
//       /* 만약  힙공간이 있다면 */
//       this.heapCount += this.typeStorage[type];
//       this.storage.unshift(data);
//     } else {
//       return console.log("힙공간이 없습니다."); // 아웃 오브 메모리
//     }

//     const pointer = new Stack("stack", this.stackCount, data.address);
//     if (pointer.address - this.typeStorage["stack"] > this.heapSize) {
//       /* 스택에 공간이 있다면 */
//       this.stackCount -= this.typeStorage["stack"];
//       this.storage.push(pointer);
//       stackedArr.push(pointer.address);
//     } else {
//       return console.log("스택이 꽉찼습니다."); //스택 오버 플로우
//     }
//   }

//   return stackedArr;
// }

// free(pointer) {}

// usage() {
//   const stackTotal = this.stackSize;
//   const stackUsed = this.stackSize + this.heapSize - this.stackCount;
//   const stackNotUsed = this.stackCount - this.heapSize;
//   const heapTotal = this.heapSize;
//   const heapUsed = this.heapCount;
//   const heapNotUsed = this.heapSize - this.heapCount;
//   return [
//     stackTotal,
//     stackUsed,
//     stackNotUsed,
//     heapTotal,
//     heapUsed,
//     heapNotUsed,
//   ];
// }
