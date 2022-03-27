import * as domUtil from "../util/domutil.js";
const defaultModelState = {
  hilightIdx: -1,
  autoCompleteData: [],
  MAX_SIZE: 10,
  toggle: {
    liContents: [],
    ulClassName: "search--toggle--ul",
    liClassName: "search--toggle--li",
    dataSet: "inputToggle",
  },
};

const staticInputState = {
  toggleClassName: ".search--toggle--ul",
  emptyContents: ["검색 결과 없음"],
  parentDom: domUtil.$(".header__main--inputWrapper"),
  inputDom: domUtil.$(".header__main--searchInput"),
};

export { defaultModelState, staticInputState };
