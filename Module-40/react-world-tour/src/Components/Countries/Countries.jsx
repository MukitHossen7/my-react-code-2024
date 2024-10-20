import "./Countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import ShowVisitedCountry from "../ShowCountry/ShowVisitedCountry";
import ShowFlags from "../ShowFlags/ShowFlags";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCoun, setVisitedCoun] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisited = (countryData) => {
    const newCountryData = [...visitedCoun, countryData];
    setVisitedCoun(newCountryData);
  };
  const handleFlags = (flag) => {
    console.log(flag);
    const newFlags = [...flags, flag];
    setFlags(newFlags);
  };
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Visited Countries : {visitedCoun.length}</h3>
      <div className="flagContainer">
        {flags.map((flag, idx) => (
          <ShowFlags key={idx} flag={flag}></ShowFlags>
        ))}
      </div>
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
            handleFlags={handleFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
