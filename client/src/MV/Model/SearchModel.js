class SearchInputModel {
  constructor(state) {
    this.state = state;
  }

  set autoCompleteData(data) {
    const incomeData = this.fitDataSize(data);
    this.state.autoCompleteData = incomeData;
  }

  get autoCompleteData() {
    return this.state.autoCompleteData;
  }

  fitDataSize(data) {
    const { MAX_SIZE } = this.state;
    if (data.length > MAX_SIZE) {
      data.splice(MAX_SIZE, data.length);
    }

    return data;
  }

  changeHilightIdx(count) {
    const {
      hilightIdx: { next },
    } = this.state;

    this.state.hilightIdx.next += count;
    this.state.hilightIdx.prev = next - count;
  }

  get;
}

class SearchMenuModel {
  constructor(state) {
    this.state = state;
  }

  set clickedContents(idx) {}

  get clickedContents() {
    this.state.clickedContentsIdx;
  }
}

export { SearchInputModel, SearchMenuModel };
