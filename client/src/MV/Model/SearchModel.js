class SearchInputModel {
  constructor(state) {
    this.state = state;
  }

  set autocompleteData(data) {
    const incomeData = this.fitDataSize(data);
    this.state.autocompleteData = incomeData;
  }

  get autocompleteData() {
    return this.state.autocompleteData;
  }

  fitDataSize(data) {
    const { MAX_SIZE } = this.state;
    if (data.length > MAX_SIZE) {
      data.splice(MAX_SIZE, data.length);
    }

    return data;
  }
}

class SearchMenuModel {
  constructor(state) {
    this.state = state;
  }

  set clickedContents(idx) {
    this.state.clickedContentsIdx = idx;
  }

  get clickedContents() {
    this.state.clickedContentsIdx;
  }
}

export { SearchInputModel, SearchMenuModel };
