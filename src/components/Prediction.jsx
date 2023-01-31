import { useState } from 'react';



import React from 'react'
import { selectCards } from '../App';

function Prediction({ past, present, future }) {
    const [buttOn, setButton] = useState(true);

    const seePrediction = () => {
        if (selectCards.length === 3) {
            setButton(false);
        }
    }
    return (

        <>
            {
                buttOn ?
                    <>
                        <div className='prediction'>
                            <button onClick={() => seePrediction()}>Prediction</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='prediction'>
                            <h3> Pasado: {past.meaning}</h3>
                            <h3> Presente: {present.meaning}</h3>
                            <h3> Futuro: {future.meaning}</h3>
                        </div>
                    </>
            }
        </>

    )

}

export default Prediction