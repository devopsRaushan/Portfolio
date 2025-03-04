import { useEffect, useState } from "react";

function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://backend:8080/api/users") // Backend API URL
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.Id}>
            {user.Name} - {user.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
