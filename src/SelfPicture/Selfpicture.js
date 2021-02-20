import React from "react";
import "./Selfpicture.css";
import Self from "./self2.jpg";

const Selfpicture =()=> {
    return (<div className="div-size">
    <img src={Self} className="center-self float-picture"></img>
    </div>)
}

export default Selfpicture;