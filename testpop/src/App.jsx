import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Signin(){
  const [showBlueBox, setShowBlueBox] = useState(true);
  const [showGreenBox, setShowGreenBox] = useState(false);

  const toggleBlueBox = () => {
    setShowBlueBox(false);
    setShowGreenBox(true);
  };

  const toggleGreenBox = () => {
    setShowGreenBox(false);
    setShowBlueBox(true);
  };
  return(
          <>
              <div>
    {showBlueBox && (
      <div
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: 'blue',
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"20px"
        }}
      >
        <input type="text" />
        <br />
        <button onClick={toggleBlueBox}>Update</button>
      </div>
    )}
   {showGreenBox && (
      <div
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: 'purple',
          borderRadius:"20px",
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"20px"
          
        }}
      >
        <button onClick={toggleGreenBox}>profile</button>
      </div>
    )}
  </div>
          </>
  )
}export default Signin;