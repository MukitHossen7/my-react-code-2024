import { useState } from "react";

const Teams = () => {
  const [team, setTeam] = useState(11);
  const handlerAdd = () => {
    setTeam(team + 1);
  };
  const handleRemove = () => {
    setTeam(team - 1);
  };
  return (
    <div>
      <h2>Team: {team} </h2>
      <button onClick={handlerAdd}>Add Player</button>
      <button onClick={handleRemove}>Remove Player</button>
    </div>
  );
};

export default Teams;
