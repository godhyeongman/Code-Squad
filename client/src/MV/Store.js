class Store {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.prevState = null; // 사용하고 싶지만 고칠게 많아서 주말로 미룹니다.
    this.nextState = null;
  }

  reduceData(data, model) {
    this.nextState = model.getHTML(data);
  }

  reduceAutoComplete(incomeData) {
    this.model.autoCompleteData = incomeData;
    const forRender = this.model.autoCompleteData;
    this.model.state.toggle.liContents = forRender;
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
