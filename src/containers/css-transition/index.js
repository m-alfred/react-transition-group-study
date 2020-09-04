import React from  'react'
import Base from './Base'
import Appear from './Appear'


function CSSTransitionDemo(props) {
  return(
    <div >
      <div style={{ padding: '20px' }}>
        <Base ></Base>
        <Appear ></Appear>
      </div>
    </div>
  )
} 
export default CSSTransitionDemo