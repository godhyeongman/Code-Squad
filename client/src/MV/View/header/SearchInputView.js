import { ToggleView } from "../AbstractToggleView.js";
import * as domUtil from "../../../util/domutil.js";

function SearchInputView(staticData) {
  ToggleView.apply(this, arguments);
  this.staticData = staticData;
  this.searchHistoryData = new Set(
    JSON.parse(localStorage.getItem("localSearchHistory"))
  );
}

SearchInputView.prototype = Object.create(ToggleView.prototype);

SearchInputView.prototype.createToggleDOM = function ({
  liContents,
  ulClassName,
  liClassName,
}) {
  if (this.isEmptyArr(liContents)) {
    return;
  } // 컨텐츠 없으면 return undefined

  const DOM = document.createElement("ul");
  DOM.classList.add(ulClassName);
  DOM.innerHTML =
    `${liContents.reduce((liHtml, contents) => {
      liHtml += `<li class="${liClassName}">${contents}</li>`;
      return liHtml;
    }, "")}` +
    /*html*/ `<button type="button" class="header__main--deleteHistoryBtn" data-button="removeHistory">기록 전체삭제</button>`;

  return DOM;
};

SearchInputView.prototype.render = function (state) {
  const removeTarget = this.staticData.toggleClassName;
  this.removePrevView(this.staticData.parentDom, removeTarget);

  if (this.isEmptyArr(state.liContents)) {
    state.liContents = this.staticData.emptyContents;
  }
  const autoCompleteDom = this.createToggleDOM(state);

  const removeBtn = autoCompleteDom.querySelector(
    '[data-button="removeHistory"]'
  );
  this.staticData.parentDom.appendChild(autoCompleteDom);
  this.addHistoryBtnEvent(removeBtn);
};

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
SearchInputView.prototype.addHistoryBtnEvent = function (target) {
  target.addEventListener("click", () => this.clickRemoveBtn());
};

SearchInputView.prototype.addInputEvent = function (dom) {
  dom.addEventListener("input", (event) => this.inputSearchZone(event));
};

SearchInputView.prototype.addFocusEvent = function (dom) {
  dom.addEventListener("focus", () => this.focusSearchZone());
};

SearchInputView.prototype.addSpecialKeyEvent = function (dom) {
  dom.addEventListener("keydown", (event) =>
    this.inputSpecialKey(event, this.staticData.toggleClassName)
  );
};

SearchInputView.prototype.init = function () {
  const { parentDom, inputDom } = this.staticData;
  this.addInputEvent(parentDom);
  this.addInputEvent(parentDom);
  this.addFocusEvent(inputDom);
  this.addSpecialKeyEvent(parentDom);
};

export { SearchInputView };
