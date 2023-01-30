import React from 'react'
const {useState} = React;

function Card(props) {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {

    setClicked(true);
};   

    return (
                <button onClick={ () => handleClick() } key={props.id} class="flip-card" style={{left:`${props.left}`, visibility: clicked ? "hidden" : "visible" }}>
                        <img src={props.img} alt=""></img>
                </button>
    )
}

export default Card

