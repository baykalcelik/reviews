import { useState } from 'react';
import './App.css';
import veri from './data.js';
import Card from './Card';

// let sira = 0;

function App() {

const [sira, setSira] = useState(0);
const [kart, setKart] = useState(veri[sira]);


  return (
    <div className="App">

      <p id="header"> Our Tours</p>
      <div id="smallLine"></div>
      <Card cardId={sira} setSira={setSira} veri={veri} changeCard={setKart} text={kart.text} image={kart.image}  name={kart.name} job={kart.job}  />
    </div>
  );
}

export default App;
