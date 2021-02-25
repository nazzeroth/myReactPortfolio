import React from "react";
import "./Personalbottom.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ScrollAnimation from 'react-animate-on-scroll';

class Personalbottom extends React.Component {
  render() {
    return (<div className="div-personal-bottom">
    <div>
    <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3">
    <span><AccountCircleIcon className="icon"/></span>
    <h4>Érdeklődés</h4>
    <p>Programozás érdekelt mindig is, hogy mi miért működik. Anno ez kezdődött a hardverekkel és folytatódott a programozással. Nagyon megszerettem a webfejlesztést és amikor csak időm engedi fejlesztem magam és tanulok, hogy minél jobb lehessek ezen a területen.</p>
    </ScrollAnimation>
    </div>

    <div>
    <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3">
    <span><ContactsIcon className="icon"/></span>
    <h4>Elérhetőség</h4>
    <p>Magyarország, Budapest. Teljesen mobilis vagyok, egyáltalán nem okoz problémát az utazás és a távolság. Preferálom a kerékpáros közlekedést, ha tehetem mindenhova azzal megyek. De 2021-ben a leggyorsabb elérhetőség az <a href="mailto:dalocsagabor@outlook.com" className="email">email</a> !</p>
    </ScrollAnimation>
    
    
    </div>

    <div>
    <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3">
    <span><DirectionsBikeIcon className="icon"/></span>
    <h4>Hobbi</h4>
    <p>Aktív kikapcsolódást részesítem előnyben, szeretek kerékpározni, szeretem a természetetet és a víz közelségét. Ebből kifolyólag szeretek horgászni, viszont ha adrenalin bombára vágyok, akkor airsoft és paintballozok a barátokkal, mindemellett makettezek is, ahol kiélhetem kreativitásomat.</p>
    </ScrollAnimation>
    </div>

    </div>)
  }
}

export default Personalbottom;