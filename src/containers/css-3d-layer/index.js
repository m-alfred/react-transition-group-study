/*
 * @Author: alfred 
 * @Date: 2020-09-08 17:35:06 
  @desc:  CSS3 3D 层级
  Safari浏览器中transform导致z-index层级渲染异常
 */
import React, { useState } from 'react'
import './index.less'

const MIN_ANGLE = -360;
const MAX_ANGLE = 360;

const MIN_PERSPECTIVE = 0;
const MAX_PERSPECTIVE = 2000;

// https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
// transform、perspective不为none时会影响层叠上下文
function CSS3DLayerPage(props) {
  const [angle, setAngle] = useState(0);
  const [perspective, setPerspective] = useState(0);

  const handleAngleChange = (evt) => {
    console.log('evt.target.value:', evt.target.value);

    setAngle(evt.target.value)
  }

  const handlePerspectiveChange = (evt) => {
    console.log('evt.target.value:', evt.target.value);

    setPerspective(evt.target.value)
  }


  console.log('angle:', angle, perspective + 'px');

  return <div className="page-con">
    <h3 >CSS3DLayerPage</h3>
    <div className='my-con'>
      <div className='mask'></div>
      <div className='main' 
        // style={{ transform: `rotateY(${angle}deg)` }}
      >
        <div >
          <div >当前旋转角度：{angle}</div>
          {MIN_ANGLE}<input type="range" min={MIN_ANGLE} max={MAX_ANGLE} value={angle} onChange={handleAngleChange} />{MAX_ANGLE}
        </div>

        <div className="rotate-con">
          <h4 >3D旋转</h4>
          <div className="strike-line"></div>
          <div className='box my-rotate' style={{ transform: `rotateY(${angle}deg)`}}>3D旋转{angle}</div>
        </div>

        <div className="rotate-con rotate-con--perspective" style={{ perspective: perspective + 'px' }}>
          <h4 >3D旋转透视</h4>
          <div >透视：</div>
          <div >
            <div >当前透视距离：{perspective}</div>
            {MIN_PERSPECTIVE}<input type="range" min={MIN_PERSPECTIVE} max={MAX_PERSPECTIVE} value={perspective} onChange={handlePerspectiveChange} />{MAX_PERSPECTIVE}
          </div>
          <div className='box my-rotate' style={{ transform: `rotateY(${angle}deg)` }}>3D旋转透视</div>
        </div> 
      </div>
    </div>



  </div>
}

export default CSS3DLayerPage;