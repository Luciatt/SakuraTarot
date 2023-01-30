
import React from 'react'
import {SelectCard} from './Seleccion'

function Card(props) {

   

    return (
                <button onClick ={() => SelectCard(props.item)} key={props.id} class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.img} alt=""></img>
                    </div>
                    
                    </div>
                </button>
    )
}

export default Card


