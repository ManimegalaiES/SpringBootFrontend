import { useState } from "react";
import axios from "axios";
import "./Login.css"; 

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const token = await axios.post("http://localhost:3001/api/auth/login", {
        userName,
        password,
      });
      console.log(token);
      alert("Login Successful");
    } catch (e) {
      console.log("Login Error", e);
      alert("Invalid Cred");
    }
    console.log("Form Submitted");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            name="userName"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
