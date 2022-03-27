import ObserverPublisher from "../../observer/Observer.js";
import dataManager from "../../service/managers/header/DataManager.js";
import historyManager from "../../service/managers/header/HistoryManager.js";
import keyboardManager from "../../service/managers/header/KeyboardManager.js";

class SearchInputEventHandler {
  constructor(targetView, observer) {
    this.targetView = targetView;
    this.inputObserver = observer;
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
    this.observer.notify(localdata);
  }

  async inputSearchZone() {
    const autoCompleteUri = `search/${value}`; // 추후 util폴더 constants로 추가할 예정
    const autoCompleteData = await this.dataManager.getFetchData(
      autoCompleteUri
    );
    this.observer.notify(autoCompleteData);
  }

  inputSpecialKey(event, length) {
    const {
      key,
      target: { value },
    } = event;

    if (key === "Enter") {
      event.preventDefault();
      this.observer.notifyNewHisory(value);
      return;
    }

    if (key === "ArrowUp" || key === "ArrowDown") {
      const hilightIdx = this.keyboardManager.getIdxCount(key, length, count);
      this.observer.notifyHilightIdx(hilightIdx);
    }
  }
}

export { SearchInputEventHandler };
