
import React, { useState } from 'react'
import Fade from '../../components/Fade';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();

  return <div >
    <h4 >mountOnEnter</h4>
      <div >
      {"By default the child component is mounted immediately along with the parent Transition component. If you want to 'lazy mount' the component on the first in={true} you can set mountOnEnter. After the first enter transition the component will stay mounted, even on 'exited', unless you also specify unmountOnExit."}
      <br ></br>
      {"当首次in={false}且mountOnEnter={true}，子组件在一开始并不会挂载到DOM上，只有当第一次in={true}的时候，子组件才会挂载"}
      </div>
      <Fade in={inProp} timeout={duration} startTime={startTime} mountOnEnter={true} prefix={'mountOnEnter'}/> 
      <button onClick={() => { startTime = Date.now(); setInProp(!inProp)}}>
        toggle
      </button>
  </div>
}