import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "https://access2place.com.au/app/uploads/2021/07/contact-us-icon-scaled.jpg",
      }}
    >
      <h1 style={{ textDecoration: "serif", color: "purple" }}>
        List of Users
      </h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
