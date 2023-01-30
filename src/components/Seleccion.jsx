import { useState, useEffect } from "react";

export let CartasElegidas = [ ];

export function SelectCard(card){
   const [newCard, setCard] = useState([]);

   useEffect(() =>{
      if (CartasElegidas.length <3 && card !== "undefined"){
         CartasElegidas.push(card);
         console.info(CartasElegidas);
         //let position= cartasElegidas.indexOf(card);
         //console.info(position);
        } 
        setCard(newCard)
  }, []);
       
    }


