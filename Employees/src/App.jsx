import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aside from './components/aside'
import Side from './components/side'
import Signin from './components/signin'
import EmployeeForm from './components/form'
import SearchHistory from './components/search'
// import Maincontainer from './components/maincontainer'
function App() {
  const [count, setCount] = useState(0)
  // const [showBlueBox, setShowBlueBox] = useState(true);
  // const [showGreenBox, setShowGreenBox] = useState(false);

  // const toggleBlueBox = () => {
  //   setShowBlueBox(false);
  //   setShowGreenBox(true);
  // };

  // const toggleGreenBox = () => {
  //   setShowGreenBox(false);
  //   setShowBlueBox(true);
  // };

  return (
    <>
  
      <div className="flex-container">
        {/* <SearchHistory/> */}
        <Aside/>
        <Side/>
        
      </div>
    </>
 )
}

export default App
