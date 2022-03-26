import ObserverPublisher from "../../observer/Observer.js";

class SearchInputEventHandler {
  constructor(dataManager, historyManager, keyboardManager) {
    const inputObserver = new ObserverPublisher();
    this.dataManager = new dataManager(inputObserver);
    this.historyManager = new historyManager(inputObserver);
    this.keyboardManager = new keyboardManager(inputObserver);
  }

  init() {
    this.targetView.focusSearchZone = this.focusSearchZone.bind(this);
    this.targetView.inputSearchZone = this.inputSearchZone.bind(this);
    this.targetView.inputSpecialKey = this.inputSpecialKey.bind(this);
    this.targetView.init();
  }

  focusSearchZone() {
    const localdata = this.historyManager.getLocalHistory();
    this.historyManager.observer.notify(localdata);
  }

  async inputSearchZone() {
    const uri = `search/${value}`; // 추후 util폴더 constants로 추가할 예정
    const autoCompleteData = await this.dataManager.getAutoCompleteData(uri);
    this.dataManager.observer.notify(autoCompleteData);
  }

  inputSpecialKey(event) {
    const {
      key,
      target: { value },
    } = event;

    if (key === "Enter") {
      event.preventDefault();
      this.historyManager.observer.notifyNewHisory(value);
      return;
    }

    if (key === "ArrowUp" || key === "ArrowDown") {
      const hilightIdx = this.keyboardManager.getIdxCount(key);
      this.keyboardManager.observer.notifyHiligthIdx(hilightIdx);
    }
  }
}

export { SearchInputEventHandler };
