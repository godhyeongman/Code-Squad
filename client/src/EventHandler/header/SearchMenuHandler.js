import { fetchData } from "../../util/fetchutil.js";

class SearchMenuEventHandler {
  constructor(store, observer) {
    this.store = store;
    this.menuObserver = observer;
  }
  init() {
    this.store.menuView.getMenuData = this.getMenuData.bind(this);
    this.store.menuView.init();
  }

  async getMenuData() {
    const uri = "search/menu/toggle";
    const fetchedData = await fetchData(uri);

    this.menuObserver.notify("incomeMenuData", fetchedData);
  }
}

export { SearchMenuEventHandler };
