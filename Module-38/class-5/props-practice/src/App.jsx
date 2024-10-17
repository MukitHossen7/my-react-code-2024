import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student name="Mukit" age={25} hobby="Programming"></Student>
      <Student name="Roy" age={21} hobby="hacker"></Student>
      <Student></Student>
      <Product product={{ name: "Watch", price: 500 }}></Product>
      <Product product={{ name: "Laptop", price: 40000 }}></Product>
    </>
  );
}

export default App;

const Student = ({ name = "N/A", age = "N/A", hobby = "N/A" }) => {
  const studentStyle = {
    border: "2px solid red",
    borderRadius: "20px",
    marginTop: "10px",
  };
  return (
    <div style={studentStyle}>
      <h3>Student Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

const Product = ({ product }) => {
  console.log(product);

  return (
    <div className="productStyle">
      <h3>This is Product Name</h3>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};
