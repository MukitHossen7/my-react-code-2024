import "./App.css";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Products name="Mobile" price="10000"></Products>
      <Products name="Laptop" price="100000"></Products>
      <Products name="watch" price="1000"></Products>
    </>
  );
}

export default App;

function Products(prop) {
  return (
    <div>
      My Products Name: {prop.name} Price : {prop.price}
    </div>
  );
}

function Person() {
  let name = "Mukit Hossen";
  return <h3>My name is {name}</h3>;
}

function Student() {
  const student = {
    name: "Mukit",
    age: 25,
    hobby: "Programming",
  };
  return (
    <div className="studentStyle">
      <h3>My name is {student.name}</h3>
      <p>My age is {student.age}</p>
      <p>My hobby is {student.hobby}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: "2px solid red",
    marginTop: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h2>Developer</h2>
      <p>Language</p>
    </div>
  );
}
