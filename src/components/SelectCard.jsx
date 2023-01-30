import {SelectCard} from "./Seleccion"


function cardSelection (){
    let past= SelectCard()[0];
    // let present = selectCard()[1];
    // let future= selectCard()[2];
    console.info(SelectCard());
    console.info(past);
        return (
        <div class="cards-grid">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style= {{backgroundImage: `url(${past.cardsReverse.sakuraReverse})`}}>
                    </div>
                    <div class="flip-card-back">
                        
                    </div>
                </div>
            </div>
            </div>
    
)}

export default cardSelection;