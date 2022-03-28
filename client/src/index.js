import ObserverPublisher from "./observer/Observer.js";
import { SearchInputView } from "./MV/View/header/SearchInputView.js";
import { SearchInputModel } from "./MV/Model/SearchModel.js";
import { MenuModel } from "./MV/Model/menuModel.js";
import Store from "./MV/Store.js";
import {
  defaultSearchState,
  staticInputState,
  defaultMenuState,
  staticMenuState,
} from "./common/Default.js";
import { SearchInputEventHandler } from "./EventHandler/header/SearchInputHandler.js";

// localStorage.setItem("localSearchHistory", "[]");
const testObserver = new ObserverPublisher();
const testView = new SearchInputView(staticInputState);
const testModel = new SearchInputModel(defaultSearchState);
const testController = new SearchInputEventHandler(testView, testObserver);
const testStore = new Store({ view: testView, model: testModel });
const testMenuModel = new MenuModel(defaultMenuState);
const testMenuView = new MenuView(staticMenuState);

testController.init();
testView.init();

testObserver.addSubscribe(
  "incomeAutoCompleteData",
  testStore.reduceLiContents.bind(testStore)
);
testObserver.addSubscribe(
  "incomeWholeSearchHistoryData",
  testStore.reduceLiContents.bind(testStore)
);
testObserver.addSubscribe(
  "incomeNewHistory",
  testStore.reduceLiContents.bind(testStore)
);

testObserver.addSubscribe(
  "incomeHilightCount",
  testStore.reduceHilightCount.bind(testStore)
);
