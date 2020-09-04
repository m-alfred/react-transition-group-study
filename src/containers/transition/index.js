import React, {  useState } from  'react'

import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  margin: '10px 0',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const ChildComponent =  function ({ content, style }) {
  return <div style={style}>{content}</div>
}

const Fade = ({ in: inProp, timeout, startTime, prefix = '', ...restProps }) => (
  /* Transition state is toggled via the in prop. When true the component begins the "Enter" stage. During this stage, the component will shift from its current transition state, to 'entering' for the duration of the transition and then to the 'entered' stage once it's complete.  */
  <Transition in={inProp} timeout={timeout} {...restProps}>
    {state => {
      // inProp false 
      // state: exited 4

      // inProp true
      // state: entered 5

      // inProp from false to true
      // state: exited 1
      // state: entering 5
      // state: entered 508

      // inProp from true to false
      // state: entered 0 
      // state: entering 3
      // state: exited 508

      // 可以看到当inProp从false到true，state状态即刻从exited转变成entering， 在timeout时间后才转变成entered
      // 从true到false，状态变化过程则相反
      console.log(prefix + ' state:', state, Date.now() - startTime);
      return (
        <ChildComponent 
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
        content="I'm a fade Transition!"
        ></ChildComponent>
    )}}
  </Transition>
);


function TransitionDemo (){
  const [inProp, setInProp] = useState(true);
  const [mountOnEnterInProp, setMountOnEnterInProp] = useState(true);
  const [unmountOnExitInProp, setUnmountOnExitInProp] = useState(true);
  const [appearInProp, setAppearInProp] = useState(true);
  const [addEndListenerInProp, setAddEndListenerInProp] = useState(true);
  
  let startTime = Date.now();
  const onTransitionEnd = () => {
    console.log('onTransitionEnd');
  }
  return (
    <div style={{ padding: '20px' }}>
      <h3 >TransitionDemo</h3>
      <Fade in={inProp} timeout={duration} startTime={startTime}/> 
      <button onClick={() => { startTime = Date.now(); setInProp(!inProp)}}>
        toggle
      </button>

      <h4 >mountOnEnter</h4>
      <div >
      {"By default the child component is mounted immediately along with the parent Transition component. If you want to 'lazy mount' the component on the first in={true} you can set mountOnEnter. After the first enter transition the component will stay mounted, even on 'exited', unless you also specify unmountOnExit."}
      <br ></br>
      {"当首次in={false}且mountOnEnter={true}，子组件在一开始并不会挂载到DOM上，只有当第一次in={true}的时候，子组件才会挂载"}
      </div>
      <Fade in={mountOnEnterInProp} timeout={duration} startTime={startTime} mountOnEnter={true} prefix={'mountOnEnter'}/> 
      <button onClick={() => { startTime = Date.now(); setMountOnEnterInProp(!mountOnEnterInProp)}}>
        toggle
      </button>

      <h4 >unmountOnExit</h4>
      <div >
      {"By default the child component stays mounted after it reaches the 'exited' state. Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting."}
      <br></br>
      {"子组件会在exit的时候从DOM上移除"}
      </div>
      <Fade in={unmountOnExitInProp} timeout={duration} startTime={startTime} unmountOnExit={true} prefix={'unmountOnExit'}/> 
      <button onClick={() => { startTime = Date.now(); setUnmountOnExitInProp(!unmountOnExitInProp)}}>
        toggle
      </button>

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
      <Fade in={appearInProp} timeout={duration} startTime={startTime} appear={true} prefix={'appear'}/> 
      <button onClick={() => { startTime = Date.now(); setAppearInProp(!appearInProp)}}>
        toggle
      </button>

      <h4 >addEndListener</h4>
      <div >
      {"Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Timeouts are still used as a fallback if provided."}
      </div>
      <Fade in={addEndListenerInProp} timeout={duration} startTime={startTime} addEndListener={onTransitionEnd} prefix={'addEndListener'}/> 
      <button onClick={() => { startTime = Date.now(); setAddEndListenerInProp(!addEndListenerInProp)}}>
        toggle
      </button>


    </div>
  );
}

export default TransitionDemo