import "./ShowFlags.css";
const ShowFlags = ({ flag }) => {
  return (
    <div>
      <img className="flagImg" src={flag}></img>
    </div>
  );
};

export default ShowFlags;
