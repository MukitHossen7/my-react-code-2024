import "./App.css";
import Cards from "./components/cards/Cards";
import EventHandler from "./components/EventHandler";

function App() {
  return (
    <>
      <h2 className="text-4xl text-center font-bold">
        Recap React core concept:
      </h2>
      <EventHandler></EventHandler>
      <Cards></Cards>
    </>
  );
}

export default App;
