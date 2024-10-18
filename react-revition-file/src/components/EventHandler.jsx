import React, { useState } from "react";
import "../index.css";

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
    <div className="text-center pt-10">
      <h3 className="text-2xl font-bold">Count : {count}</h3>
      <div className="flex justify-center gap-4 pb-10 pt-6">
        <button className="btn text-sky-600" onClick={handleAdd}>
          Add
        </button>
        <button className="btn text-red-600" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <hr></hr>
      <button
        className="btn mt-3"
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
