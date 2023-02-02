import './css/App.css';
import AllCards from './components/AllCards';
import { useState } from 'react';
import SelectedCard from "./components/SelectedCard";
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
          <SelectedCard rotate={rotate} pastOn={pastOn} selectedCard={past} text='PASADO' />
          <SelectedCard rotate={rotate} pastOn={presOn} selectedCard={present} text='PRESENTE'/>
          <SelectedCard rotate={rotate} pastOn={futOn} selectedCard={future} text='FUTURO' />
        </div>
      </div>
      <Prediction rotateCards={rotateCards}  past={past} present={present} future={future} />
      
    </>
  );
}

export default App;
