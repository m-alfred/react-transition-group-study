
import React, { useState } from 'react'
import Move from 'src/components/Move';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(false);
  let startTime = Date.now();

  return <div >
    <h3 >CSSTransitionDemo</h3>
    { 'The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided, which will be suffixed for each stage, e.g. classNames="fade" applies:' }
    <ul >
      <li >
      fade-appear, fade-appear-active, fade-appear-done
      </li>
      <li >
      fade-enter, fade-enter-active, fade-enter-done
      </li>
      <li >
      fade-exit, fade-exit-active, fade-exit-done
      </li>
    </ul>
    <div >
      <Move in={inProp} timeout={duration} startTime={startTime} />
    </div>
    <button onClick={() => { startTime = Date.now(); setInProp(!inProp) }}>
      toggle
    </button>
  </div>
}