
import React, { useState } from 'react'
import Fade from '../../components/Fade';

const duration = 1000;

export default function (props) {
  const [inProp, setInProp] = useState(true);
  let startTime = Date.now();

  return <div >
   <h4 >appear</h4>
      <div >
      {"By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true."}
      <br></br>
      <br></br>
      {"Note: there are no special appear states like appearing/appeared, this prop only adds an additional enter transition. However, in the '&lt;CSSTransition&gt;' component that first enter transition does result in additional .appear-* classes, that way you can choose to style it differently."}
      </div>
      {/*
      页面加载的时候就执行了
       appear state: exited 8
      appear state: entering 14
      appear state: entered 1021 */}
      <Fade in={inProp} timeout={duration} startTime={startTime} appear={true} prefix={'appear'}/> 
      <button onClick={() => { startTime = Date.now(); setInProp(!inProp)}}>
        toggle
      </button>

  </div>
}