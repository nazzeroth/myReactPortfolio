import React from "react";
import headerPicture from "./headerPicture2.jpg";
import "./Header.css";
import Selfpicture from "../SelfPicture/self.jpg";

const Header =()=> {
    return (<div className="div-header">
    <img src={headerPicture} className="center-img"></img>
    </div>)
}

export default Header;