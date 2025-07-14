import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        name,userName,email,password,role,
      });
      console.log(response);
      alert("Registration Successful");
    } catch (e) {
      console.error("Registration Error", e);
      alert("Registration Failed");
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <div>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Full Name</label>
          <input id="name"name="name"type="text"value={name} onChange={(e) => setName(e.target.value)}required/>
          <br /><br />

          <label htmlFor="userName">Username</label>
          <input id="userName" name="userName"type="text"value={userName}onChange={(e) => setUserName(e.target.value)}required/>
          <br /><br />

          <label htmlFor="email">Email</label>
          <input id="email" name="email"type="email"value={email}onChange={(e) => setEmail(e.target.value)}require/>
          <br /><br />

          <label htmlFor="password">Password</label>
          <input id="password" name="password"type="password"value={password}onChange={(e) => setPassword(e.target.value)}required/>
          <br /><br />

          <label htmlFor="role">Role</label>
          <select id="role"name="role"value={role}onChange={(e) => setRole(e.target.value)}required>
            <option value="">--Select Role--</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <br /><br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;