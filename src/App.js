
import './App.css';
import react, {useRef, useState} from 'react';
import anime from 'animejs/lib/anime.es.js';




function App() {

  anime({
   targets: '.anime',
   cycles: 3,
   // translateX: 250,
   // translateY: 250,
   // rotate: 10,

  });
  return (
    <div>
  <div className="anime">Hello animejs</div>
  // <button className ="button" handleClick = {handleClick}> rotate</button>
</div>
  )
}

export default App;
