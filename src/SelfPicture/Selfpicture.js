import React from "react";
import "./Selfpicture.css";
import Self from "./self.jpg";

const Selfpicture =()=> {
    return (<div className="div-size">
    <img src={Self} className="center-self"></img>
    </div>)
}

export default Selfpicture;