import React from 'react'


function Card(props) {
    
    return (
                <div key={props.id} class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.img} alt=""></img>
                    </div>
                    
                    </div>
                </div>
    )
}

export default Card

<button onclick={select(props.item)}>