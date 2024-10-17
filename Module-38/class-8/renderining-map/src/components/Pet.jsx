import "../App.css";
const Pet = ({ petObj }) => {
  const { name, breed, age, gender, price, vaccinated } = petObj;

  return (
    <div className="petStyle">
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Price: {price} </p>
      <p>Vaccinated : {vaccinated ? "true " : "false"}</p>
    </div>
  );
};

export default Pet;
