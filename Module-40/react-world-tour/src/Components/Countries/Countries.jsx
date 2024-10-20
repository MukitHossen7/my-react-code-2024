import "./Countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import ShowVisitedCountry from "../ShowCountry/ShowVisitedCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCoun, setVisitedCoun] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisited = (countryData) => {
    const newCountryData = [...visitedCoun, countryData];
    setVisitedCoun(newCountryData);
  };
  console.log(visitedCoun);
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Visited Countries : {visitedCoun.length}</h3>

      {visitedCoun.map((country) => (
        <ShowVisitedCountry
          key={country.cca3}
          showCountry={country}
        ></ShowVisitedCountry>
      ))}
      <div className="countriesStyle">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisited={handleVisited}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
