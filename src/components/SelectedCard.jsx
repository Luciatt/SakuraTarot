import React from 'react'
import BackSakura from '../img/Mesa2.svg';

function SelectedCard({pastOn, selectedCard, text, rotate}) {


  return (
      <>
        {
          pastOn ?
            <>
            
              <div className="select-flip-card" >
                  <div className="select-flip-card-inner" style={{transform: rotate ?  "rotateY(-180deg)" : "rotateY(0)" }}>
                      <div className="select-flip-card-front">
                        <img src={selectedCard.cardsReverse.sakuraReverse} alt="" />
                      </div>
                      <div className="select-flip-card-back" >
                        <img src={selectedCard.sakuraCard} alt="" />
                      </div>
                  </div>
              </div>
            
          </>
          : 
          <>
            <div className="select-flip-card">
              <div className="profileDefault">
                <img src={BackSakura} alt="" />
                <h3>{text}</h3>
              </div>
            </div>
          </>
      }
      </>
  )
}

export default SelectedCard