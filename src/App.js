import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = React.useState("")
  const [status, setStatus] = React.useState(false);
  const registerUser = () => {
    const userUrl = '/user'
    console.log(userUrl);
    fetch(userUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username
      })
    }).then(() => {
      setStatus(true)
    }).catch(() => {

    })
  }

  return (
    <div className="App">

      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <button onClick={registerUser}>log in</button>

    </div>
  );
}