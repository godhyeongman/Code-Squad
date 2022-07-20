class Stack {
  constructor(size, baseAddress) {
    this.storage = [];
    this.size = size;
    this.pointer = baseAddress;
  }
}

module.exports = Stack;
