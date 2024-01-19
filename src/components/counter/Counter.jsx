import { useState } from "react";
import CounterButton from "./CounterButton";

function Counter() {
  const [count, setCount] = useState(0);
  const increseCountBy = (by) => {
    setCount(count + by);
  };
  const decreseCountBy = (by) => {
    setCount(count - by);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <span className="count" style={{ fontSize: "100px" }}>
        {count}
      </span>
      <CounterButton
        by={1}
        increseCountBy={increseCountBy}
        decreseCountBy={decreseCountBy}
      ></CounterButton>
      <CounterButton
        by={2}
        increseCountBy={increseCountBy}
        decreseCountBy={decreseCountBy}
      ></CounterButton>
      <CounterButton
        by={3}
        increseCountBy={increseCountBy}
        decreseCountBy={decreseCountBy}
      ></CounterButton>
      <CounterButton
        by={5}
        increseCountBy={increseCountBy}
        decreseCountBy={decreseCountBy}
      ></CounterButton>

      <button
        onClick={reset}
        style={{ backgroundColor: "red", color: "white", marginTop:"10px"}}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
