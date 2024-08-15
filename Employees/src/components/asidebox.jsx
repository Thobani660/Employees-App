function Asidebox({Displaying}){

    console.log(Displaying.name,"here")
        // console.log("formData",formData)
    // console.log(profileDetails,"llll")
    let profileIsDisplaying = localStorage.getItem("formData");
    // console.log(profileIsDisplaying)
    // console.log(profileIsDisplaying,"yes")

    return(
        <div className="asidebox">
                        <div className="vert">{profileIsDisplaying}</div>
                        <div className="vert">REGISTER</div>
                        <div className="vert">EMPLOYEES</div>
                        <div className="vert">UPDATE</div>
                        <div className="vert">DELETE</div>
                        <div className="vertpic"> <br/>you need help<span className="ic--outline-live-help"></span>
                            <br />Click the button below
                            <br /><button  className="Help">help</button>
                        </div>
                </div>
    )
}export default Asidebox