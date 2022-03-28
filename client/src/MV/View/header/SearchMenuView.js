import { ToggleView } from "../AbstractToggleView.js";
import * as domUtil from "../../util/domutil.js";

function SearchMenuView(staticData) {
  ToggleView.apply(this, arguments);
  this.staticData = staticData;
}

SearchMenuView.prototype = Object.create(ToggleView.prototype);

SearchMenuView.prototype.render = function (state) {
  const removeTarget = this.staticData.toggleClassName;
  if (this.removePrevView(this.staticData.parentDom, removeTarget)) {
    this.state.liContents = this.staticData.emptyContents;
  }
  this.createToggleDom(state);
  this.parentDom.appendChild(MenuDom);
};

SearchMenuView.prototype.removePrevView = function (parentDom, targetName) {
  if (domUtil.target$(parentDom, targetName)) {
    domUtil.target$(parentDom, targetName).remove();
    return true;
  }
};

SearchMenuView.prototype.createToggleDom = function ({
  liContents,
  toggleClassName,
  toggleLiClassName,
}) {
  if (this.isEmptyArr(liContents)) {
    return;
  } // 컨텐츠 없으면 return undefined

  const DOM = document.createElement("ul");
  DOM.classList.add(toggleClassName);
  DOM.innerHTML = /*html*/ `${liContents.reduce((liHtml, contents) => {
    liHtml += `<li class="${toggleLiClassName}">${contents}</li>`;
    return liHtml;
  }, "")}`;

  return DOM;
};

export { SearchMenuView };
SearchInputView.prototype.render = function (state) {
  const removeTarget = this.staticData.toggleClassName;
  this.removePrevView(this.staticData.parentDom, removeTarget);

  if (this.isEmptyArr(state.liContents)) {
    state.liContents = this.staticData.emptyContents;
  }
  const autoCompleteDom = this.createToggleDOM(state);

  this.staticData.parentDom.appendChild(autoCompleteDom);
  const removeBtn = autoCompleteDom.querySelector(
    '[data-button="removeHistory"]'
  );
  this.addHistoryBtnEvent(removeBtn);
};
