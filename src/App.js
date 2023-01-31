import './css/App.css';
import AllCards from './components/AllCards';
import { useState } from 'react';
import UnselectedCard from "./components/UnselectedCard";

export let selectCards = []

function App() {

  
  const [pastOn, setPast] = useState(false);
  const [presOn, setPres] = useState(false);
  const [futOn, setFut] = useState(false);
  const handleClick = (item) => {
    if (selectCards.length < 3){
        selectCards.push(item)
        console.info(selectCards);
        console.info(pastOn)
        console.info(selectCards.length)
        setPast(true)}
    if(selectCards.length >= 2) {
      setPres(true)
    } 
    if(selectCards.length >= 3) {
      setFut(true)
    }  
        
    console.info(pastOn)
  }
  
  console.info(selectCards)
  const past = selectCards[0];
  const present = selectCards[1];
  const future = selectCards[2];
  console.info('past')
  console.info(past)
  console.info('persente')
  console.info(present)
  console.info('futuro')
  console.info(future)

  return (
    <>
      <AllCards handleClick={handleClick}/>
      <div className="select-cards-grid">
        <UnselectedCard pastOn={pastOn} selectedCard={past} text='PASADO' />
        <UnselectedCard pastOn={presOn} selectedCard={present} text='PRESENTE'/>
        <UnselectedCard pastOn={futOn} selectedCard={future} text='FUTURO' />
      </div>
    </>
  );
}

export default App;
