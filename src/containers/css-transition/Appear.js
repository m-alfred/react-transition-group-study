
import React, { useState } from 'react'
import Move from '../../components/Move';

const duration = 1000;

export default function () {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();

  return <div >
    <h3 >Appear</h3>
    <div >
      <Move in={inProp} timeout={duration} startTime={startTime} appear={true} />
    </div>
    <button onClick={() => { startTime = Date.now(); setInProp(!inProp) }}>
      toggle
    </button>
  </div>
}