import React from 'react'



function UnselectedCard({pastOn, selectedCard, text, rotate}) {
  

    
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
              <h1>{text}</h1>
            </div>
          </>
      }
      </>
  )
}

export default UnselectedCard