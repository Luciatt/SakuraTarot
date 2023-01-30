import "../css/App.css";
import React, { useState, useEffect } from "react";
import { sakuraService } from "./sakuraService";
import  Card  from "./Card";

function AllCards() {
    const [dataRandom, toPrintCard] = useState([]);

useEffect(() =>{
    sakuraService().then(data => {
    const dataRandom = data.sort(function () {return Math.random() - 0.5;})
    toPrintCard(dataRandom)})
}, []);
    
return (
    <div className="grid-container">
        <div className="cards-grid">
            {dataRandom.map((item) => 
                
                <Card item={item} id={item.id} img={item.cardsReverse.sakuraReverse}/>
                
            )}
        </div>
    </div>
);
}

export default AllCards;
