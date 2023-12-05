import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber, Reset } from "./actions";
import "./reducers/upDown.css";

function Counter() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <div>
      <section className="reducer-1">
        <h1 className="count">Count: {myState}</h1>
        <div className="reducer-2 d-flex align-items-center">
          <h1 onClick={() => dispatch(incNumber())} id="increment-1">
            +
          </h1>
          <h1 onClick={() => dispatch(decNumber())} id="decrement-1">
            -
          </h1>
          <h2 onClick={() => dispatch(Reset())} id="reset-1">
            Reset
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Counter;
