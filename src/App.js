import './css/App.css';
import AllCards from './components/AllCards';
import { useState } from 'react';
import UnselectedCard from "./components/UnselectedCard";
import Prediction from './components/Prediction';

export let selectCards = []

function App() {

  const [pastOn, setPast] = useState(false);
  const [presOn, setPres] = useState(false);
  const [futOn, setFut] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = (item) => {
    if (selectCards.length < 3){
        selectCards.push(item)
        console.info(selectCards);
        console.info(pastOn)
        console.info(selectCards.length)
        setPast(true)}
    if(selectCards.length >= 2) { setPres(true) } 
    if(selectCards.length >= 3) { setFut(true) }
  }
  
  const rotateCards = () => {
    setRotate(true)
  }
  
  const past = selectCards[0];
  const present = selectCards[1];
  const future = selectCards[2];
  

  return (
    <>
      <AllCards handleClick={handleClick}/>
      <div className='select-container'>
      <div className="select-cards-grid">
        <UnselectedCard rotate={rotate} pastOn={pastOn} selectedCard={past} text='PASADO' />
        <UnselectedCard rotate={rotate} pastOn={presOn} selectedCard={present} text='PRESENTE'/>
        <UnselectedCard rotate={rotate} pastOn={futOn} selectedCard={future} text='FUTURO' />
      </div>
      </div>
      <Prediction rotateCards={rotateCards}  past={past} present={present} future={future} />
      
    </>
  );
}

export default App;
