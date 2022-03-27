class Store {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.prevState = null;
    this.nextState = null;
  }

<<<<<<< HEAD
  reduceData(data, model) {
    this.nextState = model.getHTML(data);
=======
  reduceWholeHistory(data) {
    this.model.state.toggle.liContents = data;
    this.renderNextState();
>>>>>>> b59e900 (change: 포커스 이벤트 재구현)
  }

  reduceAutoComplete(incomeData) {
    this.model.autoCompleteData = incomeData;
    const forRender = this.model.autoCompleteData;
    this.model.state.toggle.liContents = forRender; // nextState로 수정필요
    this.renderNextState();
  }

  renderNextState() {
    this.view.render(this.model.state.toggle);
  }
}

export default Store;

// toggle: {
//   licontents: [],
//   ulClassName: "search--toggle--ul",
//   liClassName: "search--toggle--li",
//   dataSet: "inputToggle",
// }
