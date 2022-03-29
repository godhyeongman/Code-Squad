import * as domUtil from "../util/domutil.js";
import { defaultSearchState } from "./common/Default.js";
import { SearchInputView } from "./View/header/SearchInputView.js";
import { SearchInputModel } from "./Model/SearchModel.js";

class Store {
  constructor({ modelDefault, inputDefault }) {
    this.searchModel = new SearchInputModel(modelDefault);
    this.searchView = new SearchInputView(inputDefault);
    this.nextState = null;
  }

  reduceLiContents(data) {
    this.resetDefaultState();
    this.searchModel.liContents = data;
    this.nextState = this.searchModel.state;
    this.renderNextState();
  }

  reduceHilightCount({ plusOrMinus, toggleList }) {
    const toggleli = toggleList;
    this.searchModel.checkToggleList = toggleli;
    this.searchModel.hilightCount = plusOrMinus;

    this.nextState = this.searchModel.state;

    if (this.nextState.prevHilightIdx < 0) {
      this.nextState.prevHilightIdx = 0;
    }

    this.renderHilight(this.nextState);
  }

  resetDefaultState() {
    this.searchModel.state = defaultSearchState;
  }

  renderNextState() {
    this.searchView.render(this.nextState.toggle);
  }

  renderHilight(hilightState) {
    this.searchView.hilight(hilightState);
  }
}

export default Store;
