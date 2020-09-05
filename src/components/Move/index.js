import React  from  'react'
import './index.less'
import { CSSTransition } from 'react-transition-group';

const ChildComponent =  function ({ content, style }) {
  return <div style={style}>{content}</div>
}

const Move = ({ in: inProp, timeout, startTime, prefix = '', ...restProps }) => {
  const defaultStyle = {
    margin: '10px 0',
    display: 'inline-block',
    backgroundColor: '#f00',
    color: '#fff'
  }

  return (
    /* CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state. */
  <CSSTransition in={inProp} timeout={timeout} {...restProps} classNames="my-node">
    <ChildComponent 
      style={{
        ...defaultStyle,
      }}
      content="I'm a Move CSSTransition!"
      ></ChildComponent>
  </CSSTransition>)
}

export default  Move;