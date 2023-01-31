import React,{useState} from 'react'
//import {SelectCard} from './Seleccion'



export function Card({handleClick, left, item, id, img} ) {
    const [clicked, setClicked] = useState(false);
    
    const llamar = (item) => {
        setClicked(true);
        handleClick(item)
    }
    return (
                <button onClick={ () => llamar(item) } key={id} className="flip-card" style={{left:left, visibility: clicked ? "hidden" : "visible" }}>
                        <img src={img} alt=""></img>
                </button>
    )
}

