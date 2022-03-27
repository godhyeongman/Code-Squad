class ObserverPublisher {
  constructor(state) {
    this.state = state;
    this.observers = {
      incomeHistory: new Set(),
      incomeAutoCompleteData: new Set(),
      incomeHilightIdx: new Set(),
    };
  }

  addSubscribe(type, subScriber) {
    this.observers[type].add(subScriber);
  }

  notify(type, newState) {
    this.state = newState;
    this.observers[type].forEach((fn) => fn(this.state));
  }
}

export default ObserverPublisher;
