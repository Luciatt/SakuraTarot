import {CartasElegidas} from "./Seleccion"


function cardSelection (){
    let past= CartasElegidas[0];
    // let present = selectCard()[1];
    // let future= selectCard()[2];
    console.info(CartasElegidas);
    console.info(past);
      return (
        <>
        
        {CartasElegidas.length > 0 ? (
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
            ) : (
            <p>No hay datos disponibles</p>
            )} 
            </>
    
)
}

export default cardSelection;




// const MyComponent = ({data}) => {
//   return (
//     <>
//       {data.length > 0 ? (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No hay datos disponibles</p>
//       )}
//     </>
//   );
// };

// export default MyComponent;