import ObserverPublisher from "./observer/Observer.js";
import { SearchInputView } from "./MV/View/header/SearchInputView.js";
import { SearchInputModel } from "./MV/Model/SearchModel.js";
import Store from "./MV/Store.js";
import * as def from "./common/Default.js";
import { SearchInputEventHandler } from "./EventHandler/header/SearchInputHandler.js";
// localStorage.setItem("localSearchHistory", "[]"); // 초기화용

const testObserver = new ObserverPublisher();
const testView = new SearchInputView(def.staticInputState);
const testModel = new SearchInputModel(def.defaultModelState);
const testController = new SearchInputEventHandler(testView, testObserver);
const testStore = new Store({ view: testView, model: testModel });

testController.init();
testView.init();

testObserver.addSubscribe(
  "incomeAutoCompleteData",
  testStore.reduceAutoComplete.bind(testStore)
);
testObserver.addSubscribe("incomeHistory", testStore.reduceHistory);

// this.observers = {
//   incomeHistory: new Set(),
//   incomeAutoCompleteData: new Set(),
//   incomeHilightIdx: new Set(),
// };
