import React, { useState } from 'react';
import { addBook } from './addEmployees';
// import SearchHistory from './search';

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
      addBook(formData)
        // setNewOb([...newOb,formData]);
      localStorage.setItem("formData", JSON.stringify(formData));
    //   console.log(formData,"llll");


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
          
        }));
        
      };
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
      alert("jey")
        localStorage.setItem("formData",JSON.stringify(formData))
        // console.log(formData,"form data")
      };

   

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
                    <h3>WORK WEB</h3>
                    <p>apply on a new post today!</p>
                   </div>
                   <div className="circle"></div>
                </div>

             
                    <div className='display'>
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
                                                        type="text" 
                                                        style={{marginLeft:"30px"}}
                                                        />

                                                    <div class="middlecontainer">
                                                            <div>
                                                                <input type="text" value={formData.Email} id="Email" onChange={handleChange} name="Email"   className='position' placeholder={"@Email"} />
                                                                <input type="text" value={formData.Id} id="Idnumber"  onChange={handleChange} className='position' placeholder={"ID number"} />
                                                            </div>
                                                            <div>
                                                                <input type="text" value={formData.Phone} id="Call"   onChange={handleChange} name="Phone"   className='position' placeholder={"Phone number"} />
                                                                {/* <input type="text" value={formData.Fax} id="fax" onChange={handleChange} name="Fax"   className='position' placeholder={"Fax"} /> */}
                                                            </div>
                                                        
                                                    </div>
                                                    <button  onSubmit={handleSubmit} formData={formData} className="Submit" style={{marginLeft:"50px",width:"150px",height:"40px"}} >Update</button>
                                    </div>
                           </form>
                           <div style={{marginLeft:"200px",marginTop:"30px"}}>
                                <div className="employees1" style={{borderRadius:"10px",height:"50px",padding:"10px"}}>
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