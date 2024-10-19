import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, region, subregion, capital, area, population } = country;
  return (
    <div className="countryStyle">
      <h3>Name : {name?.common} </h3>
      <p>Region: {region}</p>
      <p>Subregion : {subregion}</p>
      <p>Capital : {capital}</p>
      <p>Area : {area}</p>
      <p>Population : {population}</p>
      <img src={flags?.png} />
    </div>
  );
};

export default Country;
