import React, { useState } from "react";

const EventHandler = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const updateValue = count + 1;
    setCount(updateValue);
  };
  const handleRemove = () => {
    const decreseValue = count - 1;
    setCount(decreseValue);
  };

  const handlePara = (mess) => {
    alert(mess);
  };
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <hr></hr>
      <button
        onClick={() => {
          handlePara("Hello React developer");
        }}
      >
        Parameter
      </button>
    </div>
  );
};

export default EventHandler;
