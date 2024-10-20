const ShowVisitedCountry = ({ showCountry }) => {
  const { name } = showCountry;
  return (
    <div>
      <ul>
        <li>{name.common}</li>
      </ul>
    </div>
  );
};

export default ShowVisitedCountry;
