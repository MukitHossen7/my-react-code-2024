import { useEffect, useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Products from "./components/products/Products";
import Fruites from "./components/fruites/fruites";

function App() {
  const [data, setData] = useState(false);
  const handleToggle = () => {
    setData((data) => !data);
  };
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  return (
    <>
      <h1>Welcome to my React</h1>
      <MyButton></MyButton>
      <hr></hr>

      <button onClick={handleToggle}>
        {data ? <Login></Login> : <Logout></Logout>}
      </button>
      <hr></hr>
      <Products products={products}></Products>
      <hr></hr>
      <Fruites />
    </>
  );
}

export default App;
