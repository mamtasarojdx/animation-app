import React, { Component } from "react";
import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(reducer);

export class Count extends Component {
  constructor() {
    super();

    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  increment() {
    console.log("increment action dispatched");
    store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    console.log("decrement action dispatched");
    store.dispatch({ type: "DECREMENT" });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.increment}>Increment</button>
        <span>{0}</span>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Count;
