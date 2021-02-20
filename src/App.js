import './App.css';
import Header from './Header/Header.js';
import Self from "./SelfPicture/Selfpicture.js";
import Personaldata from "./Personaldata/Personaldata.js";
import Personalbottom from "./Personalbottom/Personalbottom.js";

function App() {
  return (
    <div className="font">
    <Header />
    <Self />
    <Personaldata />
    <Personalbottom />
    </div>
  );
}

export default App;
