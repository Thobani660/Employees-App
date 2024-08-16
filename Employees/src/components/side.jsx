// import React, { useState } from 'react';
import { addBook } from './addEmployees';
import { useState, useEffect } from 'react';
// import SearchHistory from './search';
function Side() {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      Surname: '',
      Position: '',
      Email: '',
      Idnumber: '',
      Call: '',
      Fax: '',
    });
  
    useEffect(() => {
      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        setEmployees(JSON.parse(storedEmployees));
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleDelete = (id) => {
      const newEmployees = employees.filter((employee) => employee.Id !== id);
      setEmployees(newEmployees);
      localStorage.setItem('employees', JSON.stringify(newEmployees));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newEmployee = { ...formData, Id: new Date().getTime() };
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
      localStorage.setItem('formData', JSON.stringify([employees]));
      setFormData({
        name: '',
        email: '',
        Surname: '',
        Position: '',
        Email: '',
        Idnumber: '',
        Call: '',
        Fax: '',
      });
    };

   
    //   const formDatafriends = JSON.parse(Displaying);
    //   console.log(formDatafriends,"rrrrrr")
    //   localStorage.setItem("formData",JSON.stringify(formData))
    return(
<>
<div className="side">
                <div className="nav">
                    {/* <SearchHistory/> */}
                 
                    <div 
                        className="settings">
                            <span className="material-symbols--notifications">
                            </span>
                    </div>

                    <div id="profile">
                        <span className="mdi--invite"></span>
                        Add
                    </div>
                </div>

                <div className="leon">
                   <div >
                    <h3 style={{textShadow:"-1px 2px 0 red"}}>WORK WEB</h3>
                    <p>apply on a new post today!</p>
                   </div>
                   <div className="circle"></div>
                </div>

             
                    <div className='display'>
                       <div className="displayhere">
                           <form onSubmit={handleSubmit} >
                                    <div>
                                        <h4 style={{textShadow:"-1px 2px 0 red",marginLeft:"80px"}}>SignUp Form</h4>
                                        <div className="middlecontainer">
                                                    <div>
                                                            <label ></label><br/>
                                                            <input value={formData.name} id="name" onChange={handleChange} name="name" className='name' placeholder={"Full Name"} type="text" />
                                                            <input value={formData.Surname} id="lastname" onChange={handleChange} name="Surname"  className='lastname' placeholder={"Surname"} type="text" />
                                                    </div>  
                                                    <input 
                                                        placeholder={"Position"} 
                                                        value={formData.Position} 
                                                        id="Position" 
                                                        onChange={handleChange} 
                                                        name="Position"   
                                                        className='middleinput' 
                                                        type="text" 
                                                        style={{marginLeft:"20px",
                                                            marginTop:"0px"
                                                        }}
                                                        />       
                                                </div> 
                                               
                                              

                                                    <div className="middlecontainer">
                                                        <div>
                                                            <input type="text" value={formData.Email} id="Email" onChange={handleChange} name="Email"   className='position' placeholder={"@Email"} />
                                                            <input type="text" value={formData.Id} id="Idnumber"  onChange={handleChange} className='position' placeholder={"ID number"} />
                                                        </div>
                                                        <div>
                                                        <input type="text" value={formData.Phone} id="Call"   onChange={handleChange} name="Phone"   className='position' placeholder={"Phone number"} />
                                                                {/* <input type="text" value={formData.Fax} id="fax" onChange={handleChange} name="Fax"   className='position' placeholder={"Fax"} /> */}
                                                    </div>
                                                        
                                            </div>
                                    <button  onSubmit={handleSubmit}  className="Submit" style={{marginLeft:"50px",width:"150px",height:"40px"}} >Submit</button>
                                </div>
                           </form>
                           <div className='NewEmployee' style={{ marginLeft: '200px', marginTop: '30px', backgroundColor: 'red' }}>
      {employees.map((employee) => (
        <div key={employee.Id}>
          <h5>{employee.name}</h5>
          <button className="delete" onClick={() => handleDelete(employee.Id)}>
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