import { useState } from "react";
import "./App.css";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState(true);
  const handleSum = (num) => {
    setData(num + 5);
  };

  return (
    <>
      <h1>React Core Concept</h1>

      <Products handleSum={handleSum}></Products>
      <button onClick={() => alert(data)}> State Btn</button>
    </>
  );
}

export default App;
