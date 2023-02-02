import './css/App.css';
import AllCards from './components/AllCards';
import { useState } from 'react';
import UnselectedCard from "./components/UnselectedCard";
import Prediction from './components/Prediction';

export let selectCards = []

let paragraph = "Escoge una carta para interpretar tu pasado";
function App() {

  const [pastOn, setPast] = useState(false);
  const [presOn, setPres] = useState(false);
  const [futOn, setFut] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [textOff, setTextOff] = useState(true);
  const [text, setText] = useState(true);
  
  const handleClick = (item) => {

    if (selectCards.length < 3 && text === false) {
      selectCards.push(item)
      setPast(true)
    }
    if (selectCards.length >= 1) {
      paragraph = "De acuerdo. Ya tenemos tu carta vinculada al pasado. Ahora, escoge una para analizar tu presente... "
    }
    if (selectCards.length >= 2) {
      paragraph = "Por último, elige una tercera carta para ver tu futuro..."
      setPres(true)
    }
    if (selectCards.length >= 3) {
      setTextOff(false)
      setFut(true)
    }

  }

  const rotateCards = () => {
    setRotate(true)
  }

  const past = selectCards[0];
  const present = selectCards[1];
  const future = selectCards[2];



  return (
    <>
      <AllCards text={text} handleClick={handleClick} />
      <div className='select-container'>
        <div className="select-cards-grid">
          <UnselectedCard rotate={rotate} pastOn={pastOn} selectedCard={past} text='PASADO' />
          <UnselectedCard rotate={rotate} pastOn={presOn} selectedCard={present} text='PRESENTE' />
          <UnselectedCard rotate={rotate} pastOn={futOn} selectedCard={future} text='FUTURO' />
        </div>
      </div>
      <Prediction text={text} setText={setText} textOff={textOff} paragraph={paragraph} rotateCards={rotateCards} past={past} present={present} future={future} />

    </>
  );
}

export default App;
