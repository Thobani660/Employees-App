
function Side(){

    return(
<>
<div class="side">
                <div class="nav">
                    <input className='search' value={"Search"} type="search"></input>
                    <div class="settings"><span class="material-symbols--notifications"></span></div>
                    <div class="profile"><span class="mdi--invite"></span>
                    Add</div>
                </div>

                <div class="leon">
                   <div >
                    <h3>WORK WEB</h3>
                    <p>apply on a new post today!</p>
                   </div>
                   <div class="circle"></div>
                </div>

             
                    <div className='display'>
                       {/* <div className="displayhere">
                            <div class="middlecontainer">
                                    <div>
                                        <h6></h6>
                                        <label for="fname"></label><br/>
                                        <input className='name' value={"name"} type="text" />
                                        <input className='lastname' value={"Lastname"} type="text" />
                                    </div>
                            </div> */}
                            {/* <data value=""></data>  <h6>position:</h6> */}
                            {/* <input value={"Position"}  className='middleinput' type="text" />

                                <div class="middlecontainer">
                                        <div>
                                            <input type="text" className='position' value={"@Email"} />
                                            <input type="text"  className='position' value={"Nu."} />
                                        </div>
                                        <div>
                                            <input type="text"  className='position' value={"Contact"} />
                                            <input type="text"  className='position' value={"Fax"} />
                                        </div>
                                </div>
                                <button  className="Submit" >Update</button>
                         
                        </div> */}
                        {/* <Form></Form> */}
                     
                    </div>
              
                 <div className='signin'>
                    <input type="text" value={"username"} />
                    <input type="password" value={"Password"} /> <br/>
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
                    <div>
                    <div className="employees">
                            <h1>employees</h1>
                            <br/>
                    <div className='employeespic'>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                       <h5>Employees </h5>
                    </div>
                        </div>
                        

                    </div>
                    
                </div>

             
            </div>
        
</>
    )
}export default Side;