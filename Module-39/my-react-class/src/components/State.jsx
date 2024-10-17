import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handlerAdd = () => {
    const updateValue = count + 1;
    setCount(updateValue);
  };
  const handlerRemove = () => {
    const decreaseValue = count - 1;
    setCount(decreaseValue);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handlerAdd}>Add</button>
      <button onClick={handlerRemove}>Remove</button>
    </div>
  );
};

export default State;
