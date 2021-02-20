import React from "react";
import "./Personalbottom.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const Personalbottom =()=> {
    return (<div className="div-personal-bottom">
    <div>
    <span><AccountCircleIcon className="icon"/></span>
    <h4>Profil</h4>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    </div>

    <div>
    <span><ContactsIcon className="icon"/></span>
    <h4>address</h4>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    </div>

    <div>
    <span><DirectionsBikeIcon className="icon"/></span>
    <h4>Hobbik stb</h4>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    </div>

    </div>)
}

export default Personalbottom;