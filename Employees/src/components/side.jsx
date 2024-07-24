import React, { useState } from 'react';
import EmployeeForm from "./form";
import Signin from "./signin";
import SearchHistory from './search';

function Side(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Surname:'',
        Position:'',
        Email:'',
        Idnumber:'',
        Call:'',
        Fax:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employee Form:', formData);
      };

    // localStorage.setItem("name","Thobani")
    // console.log(localStorage.getItem("name"));

    // localStorage.setItem('search');
    // localStorage.getItem("search")
    
    // localStorage.setItem("search","searching");
    // console.log(localStorage.getItem("search"));
    // const obj = {"name","",surname",}


    return(
<>
<div className="side">
                <div className="nav">
                    <SearchHistory/>
                    {/* <input  
                            className='search' 
                            defaultValue={"Search"} 
                            type="search" 
                            placeholder="alungile"
                    /> */}
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
                    <h3>WORK WEB</h3>
                    <p>apply on a new post today!</p>
                   </div>
                   <div className="circle"></div>
                </div>

             
                    <div className='display'>
                        {/* <EmployeeForm></EmployeeForm> */}
                       <div className="displayhere">
                           <form onSubmit={handleSubmit} >
                                    <div>
                                        <div class="middlecontainer">
                                                    <div>
                                                            <label for="fname"></label><br/>
                                                            <input value={formData.name} id="name" onChange={handleChange} name="name" className='name' placeholder={"Full Name"} type="text" />
                                                            <input value={formData.Surname} id="lastname" onChange={handleChange} name="Surname"  className='lastname' placeholder={"Surname"} type="text" />
                                                    </div>         
                                                </div> 
                                                <data value=""></data>
                                                <input 
                                                        placeholder={"Position"} 
                                                        value={formData.Position} 
                                                        id="Position" 
                                                        onChange={handleChange} 
                                                        name="Position"   
                                                        className='middleinput' 
                                                        type="text" />

                                                    <div class="middlecontainer">
                                                            <div>
                                                                <input type="text" value={formData.Email} id="Email" onChange={handleChange} name="Email"   className='position' placeholder={"@Email"} />
                                                                <input type="text" value={formData.Id} id="Idnumber"  onChange={handleChange} className='position' placeholder={"ID number"} />
                                                            </div>
                                                            <div>
                                                                <input type="text" value={formData.Phone} id="Call" onChange={handleChange} name="Phone"   className='position' placeholder={"Phone number"} />
                                                                <input type="text" value={formData.Fax} id="fax" onChange={handleChange} name="Fax"   className='position' placeholder={"Fax"} />
                                                            </div>
                                                        
                                                    </div>
                                                    <button  className="Submit" >Update</button>
                                    </div>
                           </form>
                           <div>
                                <h1>hello</h1>
                                <div className="employees1">
                                    <div className='employeespic'>
                                    <div><img src="" alt="" /></div>
                                    </div>
                                    <div className="details">
                                        <h5>Employees </h5>
                                    </div>
                                    <div className="invite">
                                            <div className="add"></div> 
                                            <div className="delete"></div>        
                                    </div>
                                </div>
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