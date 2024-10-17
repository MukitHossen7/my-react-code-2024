import { useEffect } from "react";
import { useState } from "react";

const Effects = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Users : {users.length}</h3>
    </div>
  );
};

export default Effects;
