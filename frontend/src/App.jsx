import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>🏆 EcoMate Leaderboard</h1>

      {users.map((user, index) => (
        <div key={user._id}>
          <h2>#{index + 1} {user.name}</h2>
          <p>🌿 Points: {user.points}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;