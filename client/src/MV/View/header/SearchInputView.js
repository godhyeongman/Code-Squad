import { ToggleView } from "../AbstractToggleView.js";
import * as domUtil from "../../util/domutil.js";

function SearchInputView(state) {
  ToggleView.apply(this, arguments);
  this.emptyHistoryContents = ["검색 결과 없음"];
  this.state = state;
  this.searchHistoryData = new Set(
    JSON.parse(localStorage.getItem("localSearchHistory"))
  );

  this.keyUpDownCount = { listLength: null, upDownCount: 0 };
}

SearchInputView.prototype = Object.create(ToggleView.prototype);

SearchInputView.prototype.render = function (autoCompleteDom) {
  // template생성및 dom조작으로 변경할것
  const removeTarget = ".search--toggle--ul";
  this.removePrevView(this.parentDom, removeTarget);
  const removeBtn = autoCompleteDom.querySelector(
    '[data-button="removeHistory"]'
  );
  this.parentDom.appendChild(autoCompleteDom);
  this.addremoveHistoryEvent(removeBtn);
};

SearchInputView.prototype.renderSearchHistory = function (searchHistoryDom) {
  const removeTarget = ".search--toggle--ul";
  this.removePrevView(this.parentDom, removeTarget);
  // 인자DOM에 전체 검색 삭제 이벤트 추가 필요함 이부분은 View가 아닌 DOM 넘겨주는 단계에서 처리 예정
  this.parentDom.appendChild(searchHistoryDom);
}; // 중복

SearchInputView.prototype.removePrevView = function (parentDom, targetName) {
  if (domUtil.target$(parentDom, targetName)) {
    domUtil.target$(parentDom, targetName).remove();
  } // 추후 데이터 어트리뷰트로 검증후 삭제하는 방법으로 변경예정
};

SearchInputView.prototype.hilight = function ({ prev, current, list }) {
  const signatureColor = "#4285f4";
  list[prev].style.color = "black";
  list[current].style.color = signatureColor;
};

////////////// View 에서 이벤트 입력 받는 방식으로 수정중 ///////////////
SearchInputView.prototype.addHistoryBtnEvent = function (target) {
  target.addEventListener("click", () => this.ClickRemoveBtn);
};

SearchInputView.prototype.addInputEvent = function (dom) {
  dom.addEventListener("input", () => this.inputSearchZone);
};

SearchInputView.prototype.addFocusEvent = function (dom) {
  dom.addEventListener("focus", () => this.focusSearchZone);
};

SearchInputView.prototype.addSpecialKeyEvent = function (dom) {
  dom.addEventListener("keydown", () => this.inputSpecialKey);
};

SearchInputView.prototype.init = function ({ targetDom }) {
  this.addInputEvent(targetDom);
  this.addInputEvent(targetDom);
  this.addFocusEvent(targetDom);
  this.addSpecialKeyEvent(targetDom);
};

export { SearchInputView };
