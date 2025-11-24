import { useState, useEffect } from "react";
import Title from './Title';
import Count from './Count';    
import ResetButton from './ResetButton';    
import CountButtons from './CountButtons'; 
import './index.css'; 


const Card = () => {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    
    const handleKeydown = (event) => {
      if(event.code === 'Space'){
        console.log('Space key pressed');
        setNumber(prevNumber => prevNumber + 1);
      }};


    //cod de useEffect, dar cu asta doar schimbam state-ul
    window.addEventListener('keydown', {handleKeydown})

    //pentru a nu bloca memoria, stergem event listener-ul la demontarea componentului
    return () => {
      window.removeEventListener('keydown', {handleKeydown})
    };
  
  },[number]);


  return (
    <div className='card'>
        <Title number={number}/>
        <Count number={number} />
        <ResetButton setNumber={setNumber}/>
        <CountButtons setNumber={setNumber}/>
    </div>
  )
}

export default Card;