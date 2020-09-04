
import React, { useState } from 'react'
import Fade from '../../components/Fade';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();

  return <div >
    <h4 >unmountOnExit</h4>
      <div >
      {"By default the child component stays mounted after it reaches the 'exited' state. Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting."}
      <br></br>
      {"子组件会在exit的时候从DOM上移除"}
      </div>
      <Fade in={inProp} timeout={duration} startTime={startTime} unmountOnExit={true} prefix={'unmountOnExit'}/> 
      <button onClick={() => { startTime = Date.now(); setInProp(!inProp)}}>
        toggle
      </button>

  </div>
}