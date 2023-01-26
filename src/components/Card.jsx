import "../App.css";
import { useState, useEffect } from "react";
import { sakuraService } from "./sakuraService";

function App() {
  const [dataRandom, toPrintCard] = useState([]);
  

useEffect(() =>{
    sakuraService().then(data => {
    const dataRandom = data.sort(function () {return Math.random() - 0.5;})
    toPrintCard(dataRandom)})
}, []);
    
  return (
    <div class="grid-container">
      <div class="empty-space"></div>
      <div class="cards-grid">
        {dataRandom.map((element) => {
          return (
            <>
              <div key={element.id} class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={element.cardsReverse.sakuraReverse} alt=""></img>
                  </div>
                  {/* <div class="flip-card-back" style={{ backgroundImage: `url(${element.sakuraCard})` }}></div> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
