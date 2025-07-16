import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeList = ({ role }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Fetch all employees
  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:3001/api/employees");
    setEmployees(res.data);
  };

  // Fetch tasks assigned to selected employee
  const fetchTasksByEmployeeId = async (empId) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/employees/${empId}/tasks`);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  const handleEmployeeClick = (emp) => {
    setSelectedEmployee(emp);
    fetchTasksByEmployeeId(emp.id);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/api/employees/${id}`);
    fetchEmployees();
    setTasks([]);
    setSelectedEmployee(null);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Employee List Section */}
      <div>
        <h2>Employee List</h2>
        {role === "admin" && (
          <button onClick={() => window.location.href = "/add"}>Add Employee</button>
        )}
        <ul>
          {employees.map((emp) => (
            <li
              key={emp.id}
              onClick={() => handleEmployeeClick(emp)}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              <strong>{emp.name}</strong> - {emp.position}
              <span style={{ marginLeft: "10px" }}>
                <button onClick={(e) => { e.stopPropagation(); window.location.href = `/edit/${emp.id}`; }}>✏️</button>
                {role === "admin" && (
                  <button onClick={(e) => { e.stopPropagation(); deleteEmployee(emp.id); }}>🗑️</button>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Task Section */}
      <div>
        {selectedEmployee && (
          <>
            <h3>Tasks for {selectedEmployee.name}</h3>
            {tasks.length === 0 ? (
              <p>No tasks assigned.</p>
            ) : (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    <strong>{task.title}</strong>: {task.description}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
