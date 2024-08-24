import React, { useState, useEffect } from 'react';

function Asidebox({ Displaying, EmployeesData }) {
  const [employeesArray, setEmployeesArray] = useState(EmployeesData || (localStorage?.getItem("employeesData") ? JSON.parse(localStorage.getItem("employeesData")) : []));

  useEffect(() => {
    const handleStorageChange = () => {
      const storedData = localStorage.getItem("employeesData");
      if (storedData) {
        const updatedEmployeesArray = JSON.parse(storedData);
        setEmployeesArray(updatedEmployeesArray);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleAddEmployee = (newEmployee) => {
    const updatedEmployeesArray = [...employeesArray, newEmployee];
    setEmployeesArray(updatedEmployeesArray);
    localStorage.setItem("employeesData", JSON.stringify(updatedEmployeesArray));
  };

  return (
    <div className="asidebox">
      {employeesArray.length > 0 ? (
        <div>
          <div className="vert">{employeesArray[employeesArray.length - 1].name}</div>
          <div className="vert">{employeesArray[employeesArray.length - 1].Surname}</div>
          <div className="vert">{employeesArray[employeesArray.length - 1].Position}</div>
          <div className="vert">{employeesArray[employeesArray.length - 1].Email}</div>
          <div className="vert">{employeesArray[employeesArray.length - 1].Idnumber}</div>
        </div>
      ) : (
        <div>
        <div className="vert"></div>
        <div className="vert"></div>
        <div className="vert"></div>
        <div className="vert"></div>
        <div className="vert"></div>
      </div>
      )}
      <div className="vertpic">
        <br />
        you need help
        <span className="ic--outline-live-help"></span>
        <br />
        Click the button below
        <br />
        <button className="Help">help</button>
      </div>
    </div>
  );
}

export default Asidebox;