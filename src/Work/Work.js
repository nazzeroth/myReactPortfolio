import React from "react";
import "./Work.css";

const Work =()=> {
    return (<div className="div-work">
    <h1 className="work-title">Tanulmányok  -  Munkahelyek</h1>
    <div className="grid">
    <div><span className="grid-title">Iskola</span></div>
    <div></div>
    <div><span className="grid-title">Munahelyek</span></div>
    </div>

    <div className="grid">
        <div className="grid-name">
            <p className="date-underline">UDEMY</p>
            <p >2020-2021</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
        Front-End Web Development: HTML 5, CSS 3, Bootstrap 4, Javascript ES6,
DOM Manipulation, jQuery, Bash Command Line, Git, GitHub és
verziókezelés
Backend Web Development:, Node.js, NPM, Express.js, EJS, REST, APIs,
Databases, SQL, MongoDB, Mongoose, Authentication, React.js, React
Hooks, Web Design, Deployment with GitHub Pages, MongoDB Atlas</p>
        </div>
        <div className="grid-name">
            <p className="date-underline">Szoftverfejlesztő</p>
            <span>COMPUTER EMPORIUM KFT.</span>
            <p>2020 április – 2020 november</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Belső rendszer karbantartása és fejlesztése (C#, WPF). Weboldalak
fejlesztése és karbantartása,(HTML,CSS,JavaScript,Jquery,AJAX,PhP)
adatbázisok karbantartása és felügyelete (MsSQL, MYSQL, PostgreSQL)
SVN verziókezelő rendszer aktív használata. Rendszergazda feladatok
elvégzése (ActiveDirectory, levelezés, szerverek karbantartása, kamera
rendszer felügyelete)</p>
        </div>
    </div>


    <div className="grid">
        <div className="grid-name">
            <p className="date-underline">WEBLER OKTATÓ STÚDIÓ</p>
            <p>2020</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Javascript adattipusok, Függvénykifejezések, Objektumok létrehozása és
használata, Prototípusos öröklődés, Események, eseménykezelés, HTML
elemek elérése (DOM modell ismertetése)
JSON Objektumok, Tömbök, jQuery események és azok kezelése,
Effectek: Show és Hide effect, Slide, Fade és Animate effectek HTML5 és
CSS3 manipuláció
Server- kliens oldali technológiák különbsége, POST adatok átadása és
feldolgozása, GET globális használata és feldolgzása, Űrlapok
feldolgozása és validálása jQuery-vel és AJAX-al</p>
        </div>
        <div className="grid-name">
            <p className="date-underline">Tesztelő</p>
            <span>ADVANSYS NOTEBOOK SZERVIZ KFT.</span>
            <p>2020 április – 2020 november</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Notebookok diagnosztikája, szerelése, javítása, tesztelése, adatmentés,
problémás esetek kezelése, kapcsolattartás. Asztali számítógépek
szerelése, javítása.
Elsődleges feladatom, a notebookok tesztelése, diagnosztikája és az
előzetes árajánlat adása. Én foglalkozom a problémás, és ritka
hiba/hibák feltárásával esetleges megoldások/ javítások kidolgozósával.
Több hazai és Europai biztosításos javításokkal is foglalkozunk, így a
káresetek kivizsgálása is az én feladatom. Advansys raktár kezelő
program megtervezése, kifejlesztése, karbantartása és továbbfejlesztése.</p>
        </div>
    </div>


    <div className="grid">
        <div className="grid-name">
            <p className="date-underline">RUANDER OKTATÁSI KÖZPONT</p>
            <p >2018 – 2019</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Főbb tanulmányok:
Információtechnológiai alapok (Hardware ismeret, software ismeret),
Hálózati ismeretek (szerver, hálózatok típusai, felépítése, műkődése),
Programozás és adatbázis kezelés (C#, MsSQL, MySQL)
Szoftverfejlesztés (C# Winforms, WPF)
Webfejlesztés (HTML5, CSS3, JavaScript)
Szakdolgozat: Advansys Rendelés kezelő.
(Felhasznált technológiák: C#, .NET Framework, MsSQL szerver, Telerik
Plugin)</p>
        </div>
        <div className="grid-name">
            <p className="date-underline">Adatfeldolgozó, mystery shopping tesztelő</p>
            <span>QUALITRACK KFT.</span>
            <p>2009 november– 2011 január</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Adatrögzítő és feldolgozó munkakörben dolgoztam amely nagy
monotonítást ígényelt, emellet a hibázási ráta nem lehetett több mint 1%
Mystery shopping (próba vásárlás) feladatok megoldása, kivitelezése,
megtervezése. </p>
        </div>
    </div>


    <div className="grid">
        <div className="grid-name">
            <span>Multimédia fejlesztő OKJ</span>
            <p className="date-underline">2007-2008</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Adobe Photoshop, Illustrator, AfterEffect,Flash alapú tartalmak előállítása Adobe DreamWeaver-el , Hangtechnika , hangok vágása és manipulálása, Sony Sound Forge-al.
            Kép és videóvágás, manipuláció Adobe premierrel.
            </p>
        </div>
        <div className="grid-name">
            <p className="date-underline">Rendszerüzemeltető</p>
            <span>ATSYSTEMS SZÁMÍTÁSTECHNIKAI ZRT.</span>
            <p >2009 február – 2009 május</p>
        </div>
        <div className="grid-leiras">
            <p className="leiras-line">
            Rendszer üzemeltetés, virtuális szerverek felügyelete, biztonsági mentése,
szerverek beüzemelése. Telefonos, online, vagy személyes hiba elhárítás
és feltárás.</p>
        </div>
    </div>

    </div>)
}

export default Work;