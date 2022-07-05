import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, resetCounter , minusCounter } from "./redux/actions/index";

const Counter = () => {
  const amount = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleMinus = () => {
    dispatch(minusCounter());
  };

  return (
    <div>
      <h4>{amount}</h4>
      <button onClick={handleAdd}>increment</button>
      <button onClick={handleReset}> reset </button>
      <button onClick={handleMinus}> decrement </button>
    </div>
  );
};

export default Counter;
