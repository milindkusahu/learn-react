import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleInput = (e) => {
    setAmount(e.target.value);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container">
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div className="btn-container">
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="input-container">
        <input
          value={amount}
          onChange={handleInput}
          type="number"
          placeholder="Enter Amount"
        />
        <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
      </div>
    </div>
  );
};

export default Counter;
