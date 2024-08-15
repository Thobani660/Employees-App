
function Asidebox({ Displaying }) {
    console.log(Displaying, "here");
    const formData = JSON.parse(Displaying);
    return (
      <div className="asidebox">
         <div className="vert">{formData.name}</div>
                        <div className="vert">{formData.Surname}</div>
                        <div className="vert">{formData.Position}</div>
                        <div className="vert">{formData.Email}</div>
                        <div className="vert">{formData.Id}</div>
                        <div className="vertpic"> <br/>you need help<span className="ic--outline-live-help"></span>
                            <br />Click the button below
                            <br /><button  className="Help">help</button>
                        </div>

        
      </div>
    );
  }
   export default Asidebox