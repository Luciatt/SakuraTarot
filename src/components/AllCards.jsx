import "../css/App.css";
import React, { useState, useEffect } from "react";
import { sakuraService } from "./sakuraService";
import  {Card}  from "./Card";

function AllCards({handleClick, text}) {
    const [dataRandom, setData] = useState([]);
useEffect(() =>{
    sakuraService().then(data => {
    setData(data.sort(function () {return Math.random() - 0.5;}))})
}, []);
    
return (
    <div className="grid-container">
        <div className="cards-grid">
            {dataRandom.map((item, index) => 
                
                <Card text={text} handleClick={handleClick} left={`${index * 1.74}%`} item={item} key={item.id} id={item.id} img={item.cardsReverse.sakuraReverse}/>
                
            )}
        </div>
    </div>
);
}

export default AllCards;
