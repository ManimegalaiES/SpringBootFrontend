import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ role, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    onLogout(); 
    navigate("/"); 
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      {role === "admin" && <Link to="/add">Add Employee</Link>}
      <button onClick={handleLogout} style={{ float: "right" }}>Logout</button>
    </nav>
  );
};

export default Navbar;
