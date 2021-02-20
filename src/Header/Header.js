import React from "react";
import headerPicture from "./headerPicture2.jpg";
import "./Header.css";
import Selfpicture from "../SelfPicture/self.jpg";

const Header =()=> {
    return (<div className="div-header">
    <img src={headerPicture} className="center-img"></img>
    <div>
    <span className="float header-text-style1">Dalocsa Gábor</span>
    <p className="float header-text-style2">Junior Webdeveloper és Designer</p>
    </div>
    </div>)
}

export default Header;