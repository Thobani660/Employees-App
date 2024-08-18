
function Asidebox({ Displaying }) {


    // console.log(Displaying, "here");
    const formData = JSON.parse(Displaying);
    localStorage.getItem("formData")
    // console.log(formData[0],"rrrrrr")acd
    
    localStorage.setItem("formData",JSON.stringify(formData))
    return (
  <></>
    )
  }
   export default Asidebox