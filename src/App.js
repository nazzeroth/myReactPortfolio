import './App.css';
import Header from './Header/Header.js';
import Self from "./SelfPicture/Selfpicture.js";
import Personaldata from "./Personaldata/Personaldata.js";
import Personalbottom from "./Personalbottom/Personalbottom.js";
import Skill from "./Skill/Skill.js";
import Work from "./Work/Work.js";
import Footer from "./Footer/Footer.js";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="font">
    <Header />
    <Self />
    <Personaldata />
    <Personalbottom />
    <Skill />
    <Work />
    <Footer />
    </div>
  );
}

export default App;
