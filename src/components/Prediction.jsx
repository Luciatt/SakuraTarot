import React, { useState }from 'react'
import { selectCards } from '../App';
import button from "../img/BotonPrediccion.svg";
import Dialogue from './Dialogue';



function Prediction(props) {
    const [buttOn, setButton] = useState(true);
    

    const seePrediction = () => {
        if (selectCards.length === 3) {
            setButton(false);
            props.rotateCards();
        }
    }
    console.info(props.textOff)
    return (

        <>
            {
                buttOn ?
                    <>
                    {
                        props.textOff ?
                        <>
                        <Dialogue setText={props.setText} text ={props.text}paragraph={props.paragraph}/>
                        </>
                        :
                        <>
                        <div className='prediction'>
                            <button onClick={() => seePrediction()} className="buttonPrediction"><img  src={button} alt =""></img></button>
                        </div>
                        </>
                    }

                        
                    </>
                    :
                    <>
                        <div className='prediction'>
                            <h3> Pasado: <span>{props.past.englishName}</span> - <i>"{props.past.meaning}"</i></h3>
                            <h3> Presente: <span>{props.present.englishName}</span> - <i>"{props.present.meaning}"</i></h3>
                            <h3> Futuro: <span>{props.future.englishName}</span> - <i>"{props.future.meaning}"</i></h3>
                        </div>
                    </>
            }
        </>

    )

}

export default Prediction