import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisited }) => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    setValue((value) => !value);
  };

  const { name, flags, region, subregion, capital, area, population } = country;

  return (
    <div className="countryStyle">
      <img src={flags?.png} />
      <h3>Name : {name?.common} </h3>
      <p>Region: {region}</p>
      <p>Subregion : {subregion}</p>
      <p>Capital : {capital}</p>
      <p>Area : {area}</p>
      <p>Population : {population}</p>
      <button className="btn" onClick={() => handleVisited(country)}>
        Mark Visited
      </button>
      <br></br>
      <button className={`btn ${value && "isVisited"}`} onClick={handleClick}>
        {value ? "Visited" : "Going"}
      </button>
      <small>{value && " I did visited this place"}</small>
    </div>
  );
};

export default Country;
