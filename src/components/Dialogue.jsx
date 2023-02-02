import React from 'react'


function Dialogue({paragraph,text,setText}) {
    
    


  return (
    <>
    {
        text ?
            <>
                <div className='prediction'>
                    <p>Bienvenid@ a Sakura Tarot. A continuación vamos a consultar las cartas, para conocer tu destino...  <span onClick={()=>setText(false)}>Continuar</span></p>
                </div>
            </>
            :
            <>
                <div className='prediction'>
                    <p>{paragraph}</p>
                   

                </div>
            </>
}
</>
  )
}

export default Dialogue