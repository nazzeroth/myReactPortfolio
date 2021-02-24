import React from "react";
import "./Skill.css";
import skillpicture from "./SkillPicture.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

class Skill extends React.Component {
   render() {
 return (
   <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="2">
   <div className="skill-div">
    <img src={skillpicture} className="skillpicture"></img>
    
    <div>
   <p className="skill-p">Tech skill</p>
   </div>
   <div>
      <table className="table">
         <tr>
            <td>Soft skill:</td>
            <td>Tervezési készség, Rugalmasság, Kommunikáció, Monotonítás tűrés, Precizítás</td>
         </tr>
         
         
         <tr>
            <td>Hard skill</td>
            <td></td>
         </tr>
         <tr>
            <td className="td-inherit">Backend:</td>
            <td>C#, JavaScriptm, NodeJs/ExpressJs</td>
         </tr>
         <tr>
            <td className="td-inherit">Frontend:</td>
            <td>HTML5/CSS3, ReactJS, BootStrap, jQuery, Ajax</td>
         </tr>
         <tr>
            <td className="td-inherit">Verziókezelés:</td>
            <td>Git, GitHub, SvN</td>
         </tr>
         <tr>
            <td className="td-inherit">Adatbázis kezelés:</td>
            <td>MySQL/MsSQL, NoSQL/MongoDB</td>
         </tr>
         <tr>
            <td className="td-inherit">Rendszerismeret:</td>
            <td>Windows, Linux/Unix/bash</td>
         </tr>
      </table>
   </div>
   
 </div>
 </ScrollAnimation>)
   }
}

export default Skill;