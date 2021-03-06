import React from "react";
// import './app.css';
import { useQuery } from "react-query";



const App = () => {
    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
      
        return res.json();
      };
  const { data, status } = useQuery("users", fetchUsers);
  console.log("status",status)
  return (
    <div className="App">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default App;