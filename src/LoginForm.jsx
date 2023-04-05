import { React, useState } from "react";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
  };
  const handleChange = (event) => {
    if (event.target.type === "password") setPassword(event.target.value);
    else setUsername(event.target.value);
  };

  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
