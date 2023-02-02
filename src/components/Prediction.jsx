import React, { useState }from 'react'
import { selectCards } from '../App';
import button from "../img/Prediction.png";

function Prediction({ past, present, future, rotateCards }) {
    const [buttOn, setButton] = useState(true);

    const seePrediction = () => {
        if (selectCards.length === 3) {
            setButton(false);
            rotateCards();
        }
    }
    return (

        <>
            {
                buttOn ?
                    <>
                        <div className='prediction'>
                            <button onClick={() => seePrediction()} className="buttonPrediction"><img  src={button} alt="" ></img></button>
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