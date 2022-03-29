import ObserverPublisher from "./EventHandler/eventObserver/Observer.js";
import Store from "./MV/Store.js";
import {
  defaultSearchState,
  staticInputState,
  defaultMenuState,
  staticMenuState,
} from "./MV/common/Default.js";
import { SearchInputEventHandler } from "./EventHandler/header/SearchInputHandler.js";

// localStorage.setItem("localSearchHistory", "[]");
const testObserver = new ObserverPublisher();
const testStore = new Store({
  modelDefault: defaultSearchState,
  inputDefault: staticInputState,
});
const testController = new SearchInputEventHandler(testStore, testObserver);

testController.init();

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
