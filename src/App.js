import "./App.css";
import { useState } from "react";



function App() {
  const [tirage, setTirage] = useState(0);
  const [star, setStar] = useState(0);
  const [historiqueTirage, setHistoriqueTirage] = useState([])



  const handelClick = () => {
    const randomNumber = Math.floor(Math.random() * 50);
    const randomStarNumber = Math.floor(Math.random() * 12);



    setTirage(randomNumber);
    setStar(randomStarNumber);
  }



  return (
    <div className="App App-div" id="container">
      <h1>Ton numéro est le {tirage}.</h1>
      <h3>Ton étoile est {star}.</h3>


      <button className="pill-btn" onClick={handelClick}>
        Tirer au sort
      </button>




    </div>

  );
}

export default App;
