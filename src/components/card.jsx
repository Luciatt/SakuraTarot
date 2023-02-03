import React from "react";

const TarotCard = ({card})=>{
    return(
        <div img scr={card.imageUrl}alt={card.name}>
            <h1>{card.name}</h1>
            <p>{card.description}</p>
        </div>
    );
};
export default TarotCard;