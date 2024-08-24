

import { useState, useEffect } from 'react';

function Side() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
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

  const handleUpdate = (employee) => {
    setEmployee(employee);
    setIsUpdateFormVisible(true);
  };

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
    const newEmployees = [...employees, formData];
    setEmployees(newEmployees);
    localStorage.setItem('employeesData', JSON.stringify(newEmployees));
  };

  const handleDelete = (name) => {
    const newEmployees = employees.filter((employee) => employee.name !== name);
    setEmployees(newEmployees);
    localStorage.setItem('employeesData', JSON.stringify(newEmployees));
  };

  return (

    <>
    <div className="side">
      <div className="nav">
        {/* <SearchHistory/> */}
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
          <h3 style={{ textShadow: "-1px 2px 0 red" }}>WORK WEB</h3>
          <p>apply on a new post today!</p>
        </div>
        <div className="circle"></div>
      </div>

      <div className="display">
        <div className="displayhere">
      
{isUpdateFormVisible ? (
  <form onSubmit={handleUpdateSubmit}>
    <div>
      <h4 style={{ textShadow: "-1px 2px 0 red", marginLeft: "80px" }}>
        Update Form
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
        Update
      </button>
    </div>
  </form>
) : (
  <form onSubmit={handleSubmit}>
    <div>
      <h4 style={{ textShadow: "-1px 2px 0 red", marginLeft: "80px" }}>
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

          <div className="NewEmployee" style={{ marginLeft: "200px", marginTop: "30px", backgroundColor: "red" }}>
            {employees.map((employee, index) => (
              <div key={index} style={{ width: "200px" }}>
                <h5 style={{ width: "200px" }}>{employee.name}</h5>
                <button style={{ width: "200px", height: "30px" }} onClick={() => handleDelete(employee.name)}>
                  -
                </button>
              </div>
))} 
                      
    </div>
                         
                        </div>

                       
                
                    </div>
              
                    <div className='signin'>
                        <input type="text" defaultValue={"username"} />
                        <input type="password" defaultValue={"Password"} /> <br/>
                        <button>login</button>
                        <button>signup</button>
                        <button >cancel</button>
                    </div>
                 
               

                <div className='Prof'>
                    <div className='profile image'>
                        <img src="" alt="" />
                    </div>
                            <h2>Thobani Zondi</h2>
                            <div>
                            <h5>Position
                            <br/> Gender
                                <br/>Work
                                <br/>Nextkin
                                <br/>Contact
                            </h5>
                            <button> edit</button>
                        <button>delete</button>
                    </div>
                </div>
            </div>
        
</>
    )
}export default Side;