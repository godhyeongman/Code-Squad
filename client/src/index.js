import * as domUtil from "./util/domutil.js";
import { mainController } from "./EventHandler/mainHandler.js";
import { SearchInputEventHandler } from "./EventHandler/header/SearchInputHandler.js";
import { SearchMenuEventHandler } from "./EventHandler/header/SearchMenuHandler.js";
import { HeaderRoutes } from "./routes/HeaderRoutes.js";
import { HeaderHistoryPatcher } from "./service/dataController/header/HistoryManager.js";
import { HeaderKeyboadManager } from "./service/keyInputController/HeaderKeyManager.js";
import { SearchInputView } from "./View/header/SearchInputView.js";
import { SearchMenuView } from "./View/header/searchMenuView.js";
import {
  SearchInputToggle,
  SearchMenuToggle,
} from "./MV/Model/HeaderToggle.js";
import { ETCmovement } from "./service/etcMovement/EtcMovement.js";
import ObserverPublisher from "./observer/Observer.js/index.js";
import Store from "./MV/Store.js";
import * as def from "./common/Default.js";
import { SearchInputModel } from "./MV/Model/SearchModel.js";

// localStorage.setItem("localSearchHistory", "[]"); // 초기화용

const testObserver = new ObserverPublisher();
const testView = new SearchInputView(def.staticInputState);
const testModel = new SearchInputModel(def.defaultModelState);
const testController = new SearchInputEventHandler(testView, testObserver);
const testStore = new Store({ testView, testModel });

testObserver.addSubscribe(
  "incomeAutoCompleteData",
  testStore.reduceAutoComplete
);
testObserver.addSubscribe("incomeHistory", testStore.reduceHistory);

// this.observers = {
//   incomeHistory: new Set(),
//   incomeAutoCompleteData: new Set(),
//   incomeHilightIdx: new Set(),
// };
