function Signin(){
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


    const form = ["name","thobani","Surname","zondi"];
    localStorage.setItem("form","name")
    
    console.log(localStorage.getItem("num"))
    return(
            <>
                <div>
      {/* {showBlueBox && ( */}
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
          <button>Update</button>
        </div>
      {/* )} */}
     {/* ( */}
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
          <button>profile</button>
        </div>
      {/* )} */}
    </div>
            </>
    )
}export default Signin;