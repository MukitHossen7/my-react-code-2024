import { useEffect, useState } from "react";
import "../App.css";
import ShowDetails from "./ShowDetails";

const Details = () => {
  const [users, setUsers] = useState([]);
  const detailsApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    detailsApi();
  }, []);

  return (
    <div className="detailsStyle">
      <h2> Users Details :{users.length} </h2>
      {users.map((value) => (
        <ShowDetails user={value}></ShowDetails>
      ))}
    </div>
  );
};

export default Details;
