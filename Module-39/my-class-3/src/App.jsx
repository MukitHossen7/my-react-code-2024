import "./App.css";

function App() {
  function handlerClick() {
    alert("Hello React Developer");
  }
  const handlerClick2 = () => {
    alert("You handler arrow function");
  };
  const handlerClick3 = (num) => {
    alert(`You add Number ${num + 5}`);
  };
  return (
    <>
      <h2>React Learning</h2>
      <button onClick={handlerClick}>Click Regular Function</button>
      <button onClick={handlerClick2}>Click Arrow Function</button>
      <button
        onClick={() => {
          alert("You Click inside arrow function");
        }}
      >
        Click inside Arrow Function
      </button>
      <button onClick={() => handlerClick3(10)}>Pass Parameters Button</button>
    </>
  );
}

export default App;
