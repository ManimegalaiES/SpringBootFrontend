// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = { name, userName, email, password, role };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} required />

        <label>Username:</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />

        <label>User Role:</label>
        <input type="radio" name="role" value="Admin" onChange={(e) => setRole(e.target.value)} /> Admin
        <input type="radio" name="role" value="User" onChange={(e) => setRole(e.target.value)} /> User

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
