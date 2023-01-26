import '../App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, toPrintCard] = useState([])

  useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then(response => response.json())
    .then((data) => {
      data.sort(function() { return Math.random() - 0.5 });
      console.log(data)
      toPrintCard(data)})
  }, [])
  return (
    <div class="grid-container">
      <div class="empty-space"></div>
      <div class="cards-grid">
        
        {data.map(element => {
              return (
                <>
                <div key={element.id} class="flip-card">
                  <div class="flip-card-inner" >
                    <div class="flip-card-front">
                      <img src={element.cardsReverse.sakuraReverse} alt=""></img>
                    </div>
                    {/* <div class="flip-card-back" style={{ backgroundImage: `url(${element.sakuraCard})` }}></div> */}
                  </div>
                </div>
                </>
              )
            })}
      </div>
    </div>
  );
}

export default App;
