import React, { useState, useEffect } from 'react';

function Asidebox() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div className="asidebox">
      <div className="vert">{formData.name}</div>
      <div className="vert">{formData.Surname}</div>
      <div className="vert">{formData.Position}</div>
      <div className="vert">{formData.Email}</div>
      <div className="vert">{formData.Idnumber}</div>
      <div className="vertpic">
        <br />
        you need help
        <span className="ic--outline-live-help"></span>
        <br />
        Click the button below
        <br />
        <button className="Help">help</button>
      </div>
    </div>
  );
}

export default Asidebox;