import { defaultSearchState } from "./common/Default.js";
import { SearchInputView } from "./View/header/SearchInputView.js";
import { SearchInputModel } from "./Model/SearchModel.js";
import { SearchMenuView } from "./View/header/SearchMenuView.js";
import { SearchMenuModel } from "./Model/menuModel.js";

class Store {
  constructor({
    searchModelDefaultData,
    searchViewDefaultData,
    menuModelDefaultData,
    menuViewDefaultData,
  }) {
    this.searchModel = new SearchInputModel(searchModelDefaultData);
    this.searchView = new SearchInputView(searchViewDefaultData);
    this.menuModel = new SearchMenuModel(menuModelDefaultData);
    this.menuView = new SearchMenuView(menuViewDefaultData);
    this.nextSearchState = null;
    this.nextMenuState = null;
  }

  reduceLiContents(data) {
    this.resetDefaultState();
    this.searchModel.liContents = data;
    this.nextSearchState = this.searchModel.state;
    this.rendernextSearchState();
  }

  reduceHilightCount({ plusOrMinus, toggleList }) {
    const toggleli = toggleList;
    this.searchModel.checkToggleList = toggleli;
    this.searchModel.hilightCount = plusOrMinus;

    this.nextSearchState = this.searchModel.state;

    if (this.nextSearchState.prevHilightIdx < 0) {
      this.nextSearchState.prevHilightIdx = 0;
    }

    this.renderHilight();
  }

  reduceMenuData(menuData) {
    this.menuModel.state.liContents = menuData;
    this.menuView.render(this.menuModel.state);
    // this.menunextSearchState.liContents = menuData;
  }

  rendernextSearchState() {
    this.searchView.render(this.nextSearchState.toggle);
  }

  renderHilight() {
    this.searchView.hilight(this.nextSearchState);
  }

  renderMenu() {
    this.menuView.render(this.nextMenuState);
  }

  resetDefaultState() {
    this.searchModel.state = defaultSearchState;
  }
}

export default Store;
