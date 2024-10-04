import './App.css'
import Aside from './components/aside'
import Side from './components/side'
import { useState,useEffect } from 'react';


function App() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);  // New state for selected employee
  const [employee, setEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);




  useEffect(() => {
    const storedEmployees = localStorage.getItem('employeesData');
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees);
      setEmployees(parsedEmployees);
    }
  }, []);
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    alert("llll")  
  };

  return (
    <>
  
      <div className="flex-container">
        <Aside employee={selectedEmployee}/>
        <Side handleEmployeeClick={handleEmployeeClick}/>
        
      </div>
    </>
 )
}

export default App
