import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="maincontainer">
            <div class="aside">
                <div class="top1"><div className='top'>pro</div></div>
                <div class="vert">Workbench</div>
                <div class="vert">Filters</div>
                <div class="vert">Management</div>
                <div class="vert">Unlock</div>
                {/* <!-- <div class="vert">home</div>
                <div class="vert">home</div> --> */}
                <div class="vert">Map</div>
                <div class="vertpic">Search</div>
            </div>
            <div class="side">
                <div class="nav">
                    <input className='search' value={"Search"} type="search"></input>
                    <div class="settings">noty</div>
                    <div class="profile">+ Empls</div>
                </div>

                <div class="leon">
                   <div >
                    <h3>WORK WEB</h3>
                    <p>Never put off set tommorow what you can done today!</p>
                    
                   </div>
                   <div class="circle"></div>
                </div>

                <div class="middlecontainer">
                 <div>
                    <input className='name' value={"name"} type="text" />
                    <input className='lastname' value={"Lastname"} type="text" />
                 </div>
                 
                </div>
                <input value={"Position"}  className='middleinput' type="text" />
                <div class="middlecontainer">
                 <div>
                    <input type="text" className='position' value={"Email"} />
                    <input type="text"  className='position' value={"Nu."} />
                 </div>
              
                 <div>
                    <input type="text"  className='position' value={"Contact"} />
                    <input type="text"  className='position' value={"Fax"} />
                 </div>
                 
           
                 
                </div>

                <div class="bottomcontainer">
                    <div class="mockup">
                        <div class="plane">
                            <div class="planepic">plane</div>
                          
                        </div>
                        <div class="phone">
                            <div class="phonepic">phone</div>
                            <div>
                            
                            </div>
                        </div>
                        <div class="bus">
                            <div class="buspic">bus</div>
                            <div>
                              
                            </div>
                        </div>
                    </div>
                    {/* <div class="company">
                       <div> 
                             <h3>FMOUNTAIN COMPANY</h3>
                            <p>leading big data solution provider in China, aiming <br/>
                                to use big data and artificial interligence   
                            </p>
                            <button>UNLOCK</button> 
                        </div>
                        <div class="companypic">
                            picture
                        </div>
                    </div> */}
                </div>
            </div>
     
        </div>
    </>
 )
}

export default App
