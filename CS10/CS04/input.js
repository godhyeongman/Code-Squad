const { stdout } = require("process");

class InputSetting {
  constructor() {
    this.message = null;
    this.rl = null;
  }
  setPromptMessage(message) {
    this.message = message;
  }

  setReadLine() {
    this.rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.rl.setPrompt(`${this.message}`);
  }

  getData() {
    this.rl.on("", (line) => {
      console.log(line);
    });
    this.rl.close();
  }
}
const a = new InputSetting();
a.setPromptMessage("성공");
a.setReadLine();
a.rl.prompt("line", (line) => {
  a.rl.prom;
});
