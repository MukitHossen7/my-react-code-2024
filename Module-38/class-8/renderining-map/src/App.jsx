import "./App.css";
import BookStore from "./components/BookStore";
import Pet from "./components/Pet";
import Student from "./components/Student";

function App() {
  const students = ["Joy", "Mukit", "Raju", "Top"];

  const pets = [
    {
      name: "Bella",
      breed: "Labrador Retriever",
      age: 3,
      gender: "Female",
      price: 500,
      vaccinated: true,
    },
    {
      name: "Max",
      breed: "German Shepherd",
      age: 4,
      gender: "Male",
      price: 700,
      vaccinated: false,
    },
    {
      name: "Charlie",
      breed: "Golden Retriever",
      age: 2,
      gender: "Male",
      price: 600,
      vaccinated: true,
    },
    {
      name: "Lucy",
      breed: "Beagle",
      age: 1,
      gender: "Female",
      price: 450,
      vaccinated: true,
    },
  ];
  const books = [
    {
      id: 1,
      name: "Math",
      price: 300,
    },
    {
      id: 2,
      name: "Biology",
      price: 500,
    },
    {
      id: 3,
      name: "English",
      price: 150,
    },
    {
      id: 4,
      name: "Bangla",
      price: 100.0,
    },
  ];

  return (
    <>
      <h2>Vite + React</h2>
      {students.map((student) => (
        <Student name={student}></Student>
      ))}

      {pets.map((pet) => (
        <Pet petObj={pet}></Pet>
      ))}

      <BookStore books={books}></BookStore>
    </>
  );
}

export default App;
