
import React, { useState } from 'react'
import Fade from '../../components/Fade';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();
  const onTransitionEnd = () => {
    console.log('onTransitionEnd');
  }
  return <div >
   <h4 >addEndListener</h4>
      <div >
      {"Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Timeouts are still used as a fallback if provided."}
      </div>
      <Fade in={inProp} timeout={duration} startTime={startTime} addEndListener={onTransitionEnd} prefix={'addEndListener'}/> 
      <button onClick={() => { startTime = Date.now(); setInProp(!inProp)}}>
        toggle
      </button>

  </div>
}