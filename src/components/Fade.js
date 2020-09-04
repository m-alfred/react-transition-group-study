import React  from  'react'

import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const ChildComponent =  function ({ content, style }) {
  return <div style={style}>{content}</div>
}

const Fade = ({ in: inProp, timeout, startTime, prefix = '', ...restProps }) => {
  const defaultStyle = {
    margin: '10px 0',
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  }

  return (
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
  </Transition>)
}

export default  Fade;