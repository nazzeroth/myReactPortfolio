import React from "react";
import "./Selfpicture.css";
import self from "./self.jpg";

const Selfpicture =()=> {
    return (<div className="div-size">
        <img src={self} className="center-self"></img>
    </div>)
}

export default Selfpicture;