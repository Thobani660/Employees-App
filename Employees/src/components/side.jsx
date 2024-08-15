// import React, { useState } from 'react';
import { addBook } from './addEmployees';
import { useState, useEffect } from 'react';
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
    //   addBook(formData)
        // setNewOb([...newOb,formData]);
      localStorage.setItem("formData", JSON.stringify(formData));
    //   console.log(formData,"llll");

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
        }
      }, []);


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
          
        }));
        
      };
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addBook(formData);

     
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
                           <div style={{marginLeft:"200px",marginTop:"30px"}}>

                                <div className="employees1" style={{borderRadius:"10px",height:"50px",padding:"10px"}}>
                                    <div className='employeespic'>
                                    <div>img</div>
                                    </div>
                                    <div className="details">
                                                        <h5 style={{marginBottom:"30px"}}> {formData.name}</h5>
                                    </div>
                                    <div className="invite">
                                            <div className="add" style={{color:"white",alignItems:"center",justifyContent:"center",textAlign:"center"}}>+</div> 
                                            <div className="delete" style={{color:"white",alignItems:"center",justifyContent:"center",textAlign:"center"}} >-</div>        
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