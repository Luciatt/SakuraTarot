import "../css/App.css";
import React, { useState, useEffect } from "react";
import { sakuraService } from "./sakuraService";
import  Card  from "./Card";

function AllCards() {
    const [dataRandom, setData] = useState([]);
    
useEffect(() =>{
    sakuraService().then(data => {
    const dataRandom = data.sort(function () {return Math.random() - 0.5;})
    setData(dataRandom)})
}, []);
    
return (
    <div class="grid-container">
        <div class="cards-grid">
            {dataRandom.map((item, index) => 
                
                <Card left={`${index * 1.72}%`} item={item} id={item.id} img={item.cardsReverse.sakuraReverse}/>
                
            )}
        </div>
    </div>
);
}

export default AllCards;
