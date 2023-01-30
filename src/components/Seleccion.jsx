

let cartasElegidas = [ ];

export function SelectCard(card){
   
       if (cartasElegidas.length <3 && card !== "undefined"){
        cartasElegidas.push(card);
        console.info(cartasElegidas);
        //let position= cartasElegidas.indexOf(card);
        //console.info(position);
       }
       return cartasElegidas; 
    }


