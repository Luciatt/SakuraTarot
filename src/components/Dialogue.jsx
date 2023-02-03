import React from 'react'
import Continue from '../img/Continuar.png'

function Dialogue({paragraph,text,setText}) {

    return (
    <>
    {
        text ?
            <>
                <div className='prediction'>
                    <p>Bienvenid@ a Sakura Tarot. A continuación vamos a consultar las cartas, para conocer tu destino...  </p>
                    <img className='buttonContinue' onClick={()=>setText(false)} src={Continue} alt=""/>
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