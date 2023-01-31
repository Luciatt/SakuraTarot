import React from 'react'



function UnselectedCard({pastOn, selectedCard, text}) {

  

    
  return (
      <>
        {
          pastOn ?
            <>
            
              <div className="select-flip-card">
                  <div className="select-flip-card-inner">
                      <div className="select-flip-card-front" style= {{backgroundImage: `url(${selectedCard.cardsReverse.sakuraReverse})`}}>
                      </div>
                      <div className="select-flip-card-back" style= {{backgroundImage: `url(${selectedCard.sakuraCard})`}}>
                        
                      </div>
                  </div>
              </div>
            
          </>
          : 
          <>
            <h1>{text}</h1>
          </>
      }
      </>
  )
}

export default UnselectedCard