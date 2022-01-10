const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 영상 id, 영상 시간, 영상 제목, 다음 영상 링크(링크값)
class VideoData {
  constructor(id) {
    this.id = id;
    this.time = Math.floor(Math.random() * 15 + 1);
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.clip = 0;
  }

  appendNode(data) {
    const incomingNode = new VideoData(data);
    incomingNode.next = this.head;
    this.head = incomingNode;
    this.clip++;
    console.log(this.showAllData());
  }

  insertAtList(id, index) {
    const incomingNode = new VideoData(id);
    let current, previous;
    current = this.head;
    if (index == 0) {
      incomingNode.next = current;
      current = incomingNode;
      console.log(this.showAllData());
      return;
    }

    let num = +index;

    while (--num != 0) {
      console.log(`head: ${this.head.id}`);
      previous = current;
      current = current.next;
    }
    incomingNode.next = current;
    previous.next = incomingNode;

    this.clip++;
    console.log(this.showAllData());
  }

  showAllData() {
    let answer = "|---";
    let current = this.head;
    answer += `[${current.id},${current.time}]---`;
    while (current.next != null) {
      current = current.next;
      answer += `[${current.id},${current.time}]---`;
    }

    return answer;
  }
}
const video = new LinkedList();

function checkCommand(input) {
  const [command, id, index] = input;
  command == "add"
    ? video.appendNode(id)
    : command == "insert"
    ? video.insertAtList(id, index)
    : command == "delete"
    ? video.remove[id]
    : console.log("잘못된 입력입니다.");

  if (command != "quit") start();
}

function start() {
  rl.question("명령을 입력하세요 >", (input) => {
    const splitedAnswer = input.split(" ");
    checkCommand(splitedAnswer);
  });
}
start();

// test.showAlldata(5);
// console.log(test);

// removeNode(id) {
//   while (true) {
//     if (this.head.next) {
//       if (this.head.next.id == id) {
//         this.head.next = this.head.next.next;
//         this.clip--;
//       }
//       this.head = this.head.next;
//     } else if (!this.head.next) {
//       if (this.head.id == id) {
//         this.head = null;
//         this.clip--;
//       }
//       return;
//     }
//   }
// }
