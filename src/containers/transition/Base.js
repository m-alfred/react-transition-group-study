
import React, { useState } from 'react'
import Fade from 'src/components/Fade';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();

  return <div >
    <h3 >TransitionDemo</h3>
    <Fade in={inProp} timeout={duration} startTime={startTime} />
    <button onClick={() => { startTime = Date.now(); setInProp(!inProp) }}>
      toggle
    </button>
  </div>
}