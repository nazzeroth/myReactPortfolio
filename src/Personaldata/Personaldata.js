import React from "react";
import "./Personaldata.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Personaldata extends React.Component {
    render() {
    return (<div className="personal-center">
    <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" offset="0">
        <div>
        <h1> Egy kicsit magamról.</h1>
        <h3>szeretném bemutatni magam blababal</h3>
        <p>Már kiskoromban látszódott az affinitásom a technológiák felé, amikor 2 évesen alig bírtam járni de szüleim nagy meglepetésére már a videó lejátszót szereltem hogy tudjam nézni a kedvenc meséimet. Ez nyilván tovább erősödött bennem egészen felnőtt koromig amikor is hardwarekkel kezdtem el komolyabban foglalkozni. 10 évig jártam ezt az utat, viszont egy idő után sajnos ebben már nem maradt sok kihívás a számomra, így úgy döntöttem, ideje valami újba kezdenem. Mivel mindig is ebben a szakmában éreztem otthon magamat és nagyon érdekelt hogy mi az ami ezeket a hardwareket 'meghajtja',  eldöntöttem hogy fejlesztő szeretnék lenni. Ez volt az a pillanat az életemben amikor kinyílt előttem a világ. Észveszejtő hogy pár száz vagy ezer karakter megírásával képesek vagyunk eszközöket irányítani, olyan eszközöket amiket én előtte sokáig bütyköltem csavarhúzóval. Azóta is szabadidőm nagy részét azzal töltöm hogy minél többet megtanuljak erről a témakörről.</p>
        </div>
        </ScrollAnimation>
    </div>
    
    )
    }
}

export default Personaldata;