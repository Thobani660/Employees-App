import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aside from './components/aside'
import Side from './components/side'
// import Maincontainer from './components/maincontainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className="flex-container">
        
      <Aside></Aside>
      <Side></Side>
     
        </div>
    </>
 )
}

export default App
