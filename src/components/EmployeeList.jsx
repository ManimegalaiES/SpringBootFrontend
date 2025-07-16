import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeList = ({ role }) => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:3001/api/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/api/employees/${id}`);
    fetchEmployees(); // refresh
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {role === "admin" && <Link to="/add">Add New Employee</Link>}
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
            <Link to={`/edit/${emp.id}`}> ✏️ Edit</Link>
            {role === "admin" && (
              <button onClick={() => deleteEmployee(emp.id)}>🗑️ Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
