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
    this.nextState = {
      liContents: incomeData,
      ulClassName: "search--toggle--ul",
      liClassName: "search--toggle--li",
    };
    this.model.state.licontents = incomeData;
  }

  renderNextState() {
    this.view.render(this.nextState);
  }
}

export default Store;
