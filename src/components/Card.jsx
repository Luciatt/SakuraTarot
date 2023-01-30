import React from 'react'
import {SelectCard} from './Seleccion'
const {useState} = React;

function Card(props) {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = (item) => {
    
    setClicked(true);
    SelectCard(item)
};   

    return (
                <button onClick={ () => handleClick(props.item) } key={props.id} className="flip-card" style={{left:`${props.left}`, visibility: clicked ? "hidden" : "visible" }}>
                        <img src={props.img} alt=""></img>
                </button>
    )
}

export default Card

