import { useState, useEffect } from 'react';
import SearchHistory from './search';

function Side() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Position, setPosition] = useState('');
  const [Email, setEmail] = useState('');
  const [Idnumber, setIdnumber] = useState('');
  const [Call, setCall] = useState('');
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employeesData');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      Surname,
      Position,
      Email,
      Idnumber,
      Call,
    };

    if (isUpdateFormVisible) {
      const updatedEmployees = employees.map(emp =>
        emp.name === employee.name ? formData : emp
      );
      setEmployees(updatedEmployees);
      localStorage.setItem('employeesData', JSON.stringify(updatedEmployees));
      setIsUpdateFormVisible(false);
      setEmployee(null);
    } else {
      const newEmployees = [...employees, formData];
      setEmployees(newEmployees);
      localStorage.setItem('employeesData', JSON.stringify(newEmployees));
    }

    // Clear form
    setName('');
    setSurname('');
    setPosition('');
    setEmail('');
    setIdnumber('');
    setCall('');
  };

  const handleDelete = (name) => {
    const newEmployees = employees.filter((employee) => employee.name !== name);
    setEmployees(newEmployees);
    localStorage.setItem('employeesData', JSON.stringify(newEmployees));
  };

  const handleUpdate = (employeeToUpdate) => {
    setEmployee(employeeToUpdate);
    setName(employeeToUpdate.name);
    setSurname(employeeToUpdate.Surname);
    setPosition(employeeToUpdate.Position);
    setEmail(employeeToUpdate.Email);
    setIdnumber(employeeToUpdate.Idnumber);
    setCall(employeeToUpdate.Call);
    setIsUpdateFormVisible(true);
  };

  return (
    <>
      <div className="side">
        <div className="nav">
          <SearchHistory />
          <div className="settings">
            <span className="material-symbols--notifications"></span>
          </div>
          <div id="profile">
            <span className="mdi--invite"></span>
            Add
          </div>
        </div>

        <div className="leon">
          <div>
            <h3 style={{ textShadow: "-1px 2px 0 purple",color:"purple" }}>WORK WEB</h3>
            <h4>Apply on a new post today!</h4>
          </div>
          <div className="circle" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
        </div>

        <div className="display">
          <div className="displayhere">
            {isUpdateFormVisible ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 style={{ textShadow: "-1px 2px 0 gray", marginLeft: "80px" }}>
                    Update Form
                  </h2>
                  <div className="middlecontainer">
                    <div>
                      <label></label>
                      <br />
                      <input
                        value={name}
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                        className="name"
                        placeholder={"Full Name"}
                        type="text"
                      />
                      <input
                        value={Surname}
                        id="lastname"
                        onChange={(event) => setSurname(event.target.value)}
                        name="Surname"
                        className="lastname"
                        placeholder={"Surname"}
                        type="text"
                      />
                    </div>
                    <input
                      placeholder={"Position"}
                      value={Position}
                      id="Position"
                      onChange={(event) => setPosition(event.target.value)}
                      name="Position"
                      className="middleinput"
                      type="text"
                      style={{
                        marginLeft: "20px",
                        marginTop: "0px",
                      }}
                    />
                  </div>

                  <div className="middlecontainer">
                    <div>
                      <input
                        type="text"
                        value={Email}
                        id="Email"
                        onChange={(event) => setEmail(event.target.value)}
                        name="Email"
                        className="position"
                        placeholder={"@Email"}
                      />
                      <input
                        type="text"
                        value={Idnumber}
                        id="Idnumber"
                        onChange={(event) => setIdnumber(event.target.value)}
                        name="Idnumber"
                        className="position"
                        placeholder={"ID number"}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={Call}
                        id="Call"
                        onChange={(event) => setCall(event.target.value)}
                        name="Phone"
                        className="position"
                        placeholder={"Phone number"}
                      />
                    </div>
                  </div>

                  <button className="Submit" style={{ marginLeft: "50px", width: "150px", height: "40px" }}>
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <h4 style={{ textShadow: "-1px 2px 0 silver", marginLeft: "80px",color:"purple" }}>
                    SignUp Form
                  </h4>
                  <div className="middlecontainer">
                    <div>
                      <label></label>
                      <br />
                      <input
                        value={name}
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                        className="name"
                        placeholder={"Full Name"}
                        type="text"
                      />
                      <input
                        value={Surname}
                        id="lastname"
                        onChange={(event) => setSurname(event.target.value)}
                        name="Surname"
                        className="lastname"
                        placeholder={"Surname"}
                        type="text"
                      />
                    </div>
                    <input
                      placeholder={"Position"}
                      value={Position}
                      id="Position"
                      onChange={(event) => setPosition(event.target.value)}
                      name="Position"
                      className="middleinput"
                      type="text"
                      style={{
                        marginLeft: "20px",
                        marginTop: "0px",
                      }}
                    />
                  </div>

                  <div className="middlecontainer">
                    <div>
                      <input
                        type="text"
                        value={Email}
                        id="Email"
                        onChange={(event) => setEmail(event.target.value)}
                        name="Email"
                        className="position"
                        placeholder={"@Email"}
                      />
                      <input
                        type="text"
                        value={Idnumber}
                        id="Idnumber"
                        onChange={(event) => setIdnumber(event.target.value)}
                        name="Idnumber"
                        className="position"
                        placeholder={"ID number"}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={Call}
                        id="Call"
                        onChange={(event) => setCall(event.target.value)}
                        name="Phone"
                        className="position"
                        placeholder={"Phone number"}
                      />
                    </div>
                  </div>

                  <button className="Submit" style={{ marginLeft: "50px", width: "150px", height: "40px" }}>
                    Submit
                  </button>
                </div>
              </form>
            )}
            <div className="NewEmployee" style={{ height: "410px", backgroundColor: "transparent",padding:"5px", overflow: "auto", marginLeft: "200px", marginTop: "0px" }}>
  <h2 style={{ position: "fixed", color: "purple",marginTop:"-50px" }}>My Employee List</h2>

  {employees.map((emp, index) => (
    <div key={index} style={{
      marginTop: "5px",
      boxShadow: "2px 3px 1px #726c6c",
      display: "flex",
      borderRadius: "10px",
      width: "300px",
      height: "60px",
      padding: "5px",
      backgroundColor: "rgb(12, 12, 85)",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      overflow: "hidden"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        backgroundColor: "white",
        borderRadius: "100%",
        marginRight: "10px"
      }}></div>
      <h4 style={{
        flex: "1",
        color: "white",
        margin: "0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}>
        {emp.name}
      </h4>
      <button style={{
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }} onClick={() => handleDelete(emp.name)}>
        -
      </button>
      <button style={{
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }} onClick={() => handleUpdate(emp)}>
        Edit
      </button>
    </div>
  ))}
</div>

          </div>
        </div>

        <div className='signin'>
          <input type="text" defaultValue={"username"} />
          <input type="password" defaultValue={"Password"} /> <br />
          <button>login</button>
          <button>signup</button>
          <button>cancel</button>
        </div>

        <div className='Prof'>
          <div className='profile image'>
            <img src="" alt="" />
          </div>
          <h2>Thobani Zondi</h2>
          <div>
            <h5>Position
              <br /> Gender
              <br /> Work
              <br /> Nextkin
              <br /> Contact
            </h5>
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Side;
