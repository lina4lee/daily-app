// import React, {useState, useEffect} from 'react';
import Gratitude from '../components/Gratitude.jsx';
// injecting chromogen
import React, { useEffect } from 'react';
import { useState as hooksUseState } from 'chromogen';


// function MainContainer (){
const MainContainer: React.FC = () => {
  // const [post, setPost] = hooksUseState<number[]>([0], "id");
  const [count, setcount] = hooksUseState<number[]>([0], "id");

  
//  useEffect(() => 
 
//     fetch('/')
//     .then(data => data.json())
//     .then(data => console.log(data))


//   )
  
  const increment = (num) => {
    setCount(num + 1);
  }

  return(
    <div>
      <p>{count}</p>
      <button onClick={increment}>'Click here to add 1'</button>

    </div>
     {/* <Gratitude /> */}
  )
}

export default MainContainer;