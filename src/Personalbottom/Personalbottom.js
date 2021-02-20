import React from "react";
import "./Personalbottom.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const Personalbottom =()=> {
    return (<div className="div-personal-bottom">
    <div>
    <span><AccountCircleIcon className="icon"/></span>
    <h4>Érdeklődés</h4>
    <p>Programozás, érdekelt mindig is ,hogy mi miért mükődik , anno ez kezdődött a hardwarekkel, és folytatódott a programozással, nagyon megszerettem a webfejlesztést, és amikor csak időm engedi fejlesztem magam és tanulok, hogy jobb lehessek.</p>
    </div>

    <div>
    <span><ContactsIcon className="icon"/></span>
    <h4>Elérhetőség</h4>
    <p>Magyarország, Budapest. Mobilis vagyok, nem okoz problémát az utazás, és a távolság, preferálom a kerékpáros közlekedést, ha tehetem mindenhova azzal megyek. De 2021-ben a leggyorsabb elérhetőség az <a href="mailto:dalocsagabor@outlook.com" className="email">email</a> !</p>
    </div>

    <div>
    <span><DirectionsBikeIcon className="icon"/></span>
    <h4>Hobbi</h4>
    <p>Aktív kikapcsolódást részesítem előnyben, szeretek kerékpározni, szeretem a természetetet és a víz közelségét ebből kifolyólag szeretek horgászni, ha adrenalin bombára vágyok, akkor airsoft és paintballozok a barátokkal, mind emelett makettezek is, ahol kiélhetem creativításomat.</p>
    </div>

    </div>)
}

export default Personalbottom;