import { FetchDataManager } from "../../service/managers/header/DataManager.js";
import { HistoryManager } from "../../service/managers/header/HistoryManager.js";
import { KeyboadManager } from "../../service/managers/header/KeyboardManager.js";

class SearchInputEventHandler {
  constructor(targetView, observer) {
    this.targetView = targetView;
    this.inputObserver = observer;
    this.dataManager = new FetchDataManager();
    this.historyManager = new HistoryManager();
    this.keyboardManager = new KeyboadManager();
  }

  init() {
    this.targetView.focusSearchZone = this.focusSearchZone.bind(this);
    this.targetView.inputSearchZone = this.inputSearchZone.bind(this);
    this.targetView.inputSpecialKey = this.inputSpecialKey.bind(this);
  }

  focusSearchZone() {
    const localdata = this.historyManager.getLocalHistory();
    this.observer.notify(localdata);
  }

  async inputSearchZone({ target: { value } }) {
    const autoCompleteUri = `search/${value}`; // 추후 util폴더 constants로 추가할 예정
    const autoCompleteData = await this.dataManager.getFetchData(
      autoCompleteUri
    );

    if (autoCompleteData.length === 0) {
      return;
    }

    this.inputObserver.notify("incomeAutoCompleteData", autoCompleteData);
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
