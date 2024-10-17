import "./App.css";
import Demo from "./conponents/Demo";

function App() {
  return (
    <>
      <h2>My React Learning</h2>
      <Demo task="Learn React" isDone={true}></Demo>
      <Demo task="Core concepts" isDone={false}></Demo>
      <Demo task="Try Jsx" isDone={true}></Demo>
    </>
  );
}

export default App;
