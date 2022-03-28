import * as domUtil from "../util/domutil.js";
import { defaultModelState } from "../common/Default.js";

class Store {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.nextState = null;
  }

  reduceLiContents(data) {
    this.resetDefaultState();
    this.model.liContents = data;
    this.nextState = this.model.state;
    this.renderNextState();
  }

  reduceHilightCount({ plusOrMinus, toggleList }) {
    const toggleli = toggleList;
    this.model.checkToggleList = toggleli;
    this.model.hilightCount = plusOrMinus;

    this.nextState = this.model.state;

    if (this.nextState.prevHilightIdx < 0) {
      this.nextState.prevHilightIdx = 0;
    }

    this.renderHilight(this.nextState);
  }

  resetDefaultState() {
    this.model.state = defaultModelState;
  }

  renderNextState() {
    this.view.render(this.nextState.toggle);
  }

  renderHilight(hilightState) {
    this.view.hilight(hilightState);
  }
}

export default Store;
