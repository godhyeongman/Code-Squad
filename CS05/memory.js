const Heap = require("./heap");
const Stack = require("./Stack");
class Memory {
  constructor(size, address) {
    this.size = size;
    this.address = address;
    this.heap = null;
    this.stack = null;
    this.typeStorage = { stack: 4 };
  }

  init(stackSize, heapSize) {
    this.stack = new Stack(stackSize, heapSize + stackSize);
    this.heap = new Heap(heapSize, 0);
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

    let size = this.typeStorage[type];
    const stackPointer = this.stack.pointer;
    const stackData = { address: stackPointer, heapPoint: this.heap.pointer };
    this.stack.storage.push(stackData);
    this.stack.pointer -= 4;

    for (let i = 0; i < count; i++) {
      if (size < 8) {
        size = 8;
      }
      const heapData = { type, size, stackPointer };
      this.heap.storage.unshift(heapData);
      this.heap.pointer += size;
    }
  }

  free(pointer) {
    const removedData = this.stack.storage.find((item, idx) => {
      if (item.address === pointer) {
        this.stack.storage.splice(idx, 1);
        return item;
      }
    }); // pointer가 가진 스택 데이터

    this.stack.pointer += 4;
    this.heap.storage = this.heap.storage.reduce((acc, curr) => {
      if (curr.stackPointer !== removedData.address) {
        acc.push(curr);
      } else if (curr.stackPointer === removedData.address) {
        this.heap.pointer -= curr.size;
      }
      return acc;
    }, []);
  }

  call(name, paramCount) {
    if (paramCount < 0 || 10 < paramCount) {
      console.log("반복 횟수가 잘못되었습니다.");
      return;
    } else if (name.split("").length >= 8) {
      console.log("이름 길이가 잘못되었습니다.");
    }
    for (let i = 0; i < paramCount; i++) {
      this.stack.storage.push({ name: name, address: this.stack.pointer });
      this.stack.pointer -= 4;
    }
  }

  returnFrom(name) {
    const address = this.stack.storage.findIndex((item) => item.name === name);
    const removedStack = this.stack.storage.reduce((acc, curr, idx) => {
      if (idx < address) {
        acc.push(curr);
      } else if (idx >= address) {
        this.stack.pointer += 4;
      }
      return acc;
    }, []);

    this.stack.storage = removedStack;

    this.callstack();
  }

  usage() {
    const stackSize = this.stack.size;
    const heapSize = this.heap.size;
    const usedStack = this.stack.pointer - heapSize;
    const usedHeap = heapSize - this.heap.pointer;

    console.log(
      `스택 사이즈:${stackSize}, 사용가능: ${usedStack}\n힙사이즈: ${heapSize}, 사용가능: ${usedHeap}`
    );
  }

  callstack() {
    const firstObj = this.stack.storage.find((item) => item.name);
    const lastObj = this.stack.storage.reduce((acc, curr) => {
      if (curr.name) {
        acc = curr;
      }
      return acc;
    });

    console.log(
      `${firstObj.name} ${firstObj.address}=> ${lastObj.name} ${lastObj.address}`
    );
  }

  heapDump() {
    const data = [];
    this.heap.storage.forEach((item) => {
      const names = data.reduce((acc, curr) => {
        acc.push(curr.type);
        return acc;
      }, []);

      if (!names.includes(item.type)) {
        data.push(item);
        console.log(
          `name: ${item.type}, size: ${item.size}, pointer: ${item.stackPointer}`
        );
      }
    });
  }

  gabageCollect() {}
}

const test = new Memory(100, 0);

test.init(20, 40);
test.setSize("int", 4);
test.setSize("num", 4);
test.malloc("int", 2);
test.malloc("num", 2);
test.free(60);
test.call("foo", 2);
test.call("bar", 1);
test.call("dap", 1);
test.malloc("int", 1);
test.returnFrom("dap");
test.heapDump();
test.usage();
// console.log(test.heap, test.stack);

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
