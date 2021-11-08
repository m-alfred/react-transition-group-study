import React, { useState } from 'react'
import './index.less'

const MIN_ANGLE = -360;
const MAX_ANGLE = 360;

const MIN_PERSPECTIVE = 0;
const MAX_PERSPECTIVE = 2000;

function CSS3DPage(props) {
  const [angle, setAngle] = useState(0);
  const [perspective, setPerspective] = useState(0);
  const [cubePerspective, setCubePerspective] = useState(650);

  const handleAngleChange = (evt) => {
    console.log('evt.target.value:', evt.target.value);

    setAngle(evt.target.value)
  }

  const handlePerspectiveChange = (evt) => {
    console.log('evt.target.value:', evt.target.value);

    setPerspective(evt.target.value)
  }

  const handleCubePerspectiveChange = (evt) => {
    console.log('evt.target.value:', evt.target.value);

    setCubePerspective(evt.target.value)
  }

  console.log('angle:', angle, perspective + 'px');

  return <div className="page-con">
    <h3 >CSS3DPage</h3>
    <div >
      <div >当前旋转角度：{angle}</div>
      {MIN_ANGLE}<input type="range" min={MIN_ANGLE} max={MAX_ANGLE} value={angle} onChange={handleAngleChange} />{MAX_ANGLE}
    </div>

    <div className="rotate-con">
      <h4 >3D旋转</h4>
      <div className='box my-rotate' style={{ transform: `rotateY(${angle}deg)` }}>3D旋转{angle}</div>
    </div>

    <div className="rotate-con rotate-con--perspective" style={{ perspective: perspective + 'px' }}>
      <h4 >3D旋转透视</h4>
      <div >透视：</div>
      <div >绘画上透视指在平面或曲面上描绘物体的空间关系的方法或技术</div>
      <div >
        {'CSS 属性 perspective指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。'}
        <br></br>
        {'三维元素在观察者后面的部分不会绘制出来，即 z 轴坐标值大于 perspective 属性值的部分。'}
        <br></br>
        {'默认情况下，消失点位于元素的中心，但是可以通过设置 perspective-origin 属性来改变其位置。'}
        <br></br>
        {'当该属性值不为 0 和 none 时，会创建新的 层叠上下文。在这种情况下，容器内元素的层叠关系像是使用了 position: fixed 一样。'}
      </div>
      <div >
        <div >当前透视距离：{perspective}</div>
        {MIN_PERSPECTIVE}<input type="range" min={MIN_PERSPECTIVE} max={MAX_PERSPECTIVE} value={perspective} onChange={handlePerspectiveChange} />{MAX_PERSPECTIVE}
      </div>
      <div className='box my-rotate' style={{ transform: `rotateY(${angle}deg)` }}>3D旋转透视</div>
    </div>

    <div className="rotate-con">
      <h4 >立体透视 perspective属性</h4>
      <div style={{ marginBottom: '50px' }}>
        此示例显示了一个立方体，其 perspective 设置为不同的值。立方体的收缩由 perspective 属性定义。它的值越小，视角越深。
      </div>
      <div class="cube" style={{ perspective: cubePerspective + 'px' }}>
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>

      <div >
        <div >当前透视距离：{cubePerspective}</div>
        {MIN_PERSPECTIVE}<input type="range" min={MIN_PERSPECTIVE} max={MAX_PERSPECTIVE} value={cubePerspective} onChange={handleCubePerspectiveChange} />{MAX_PERSPECTIVE}
      </div>

      <div >
        CSS 属性 perspective-origin 指定了观察者的位置，用作 perspective 属性的消失点。
      </div>
      <div >
        CSS 属性 transform-style 设置元素的子元素是位于 3D 空间中还是平面中。
        <p >
          如果选择平面，元素的子元素将不会有 3D 的遮挡关系
        </p>
      </div>
      <div >
        CSS 属性 backface-visibility 指定当元素背面朝向观察者时是否可见。
        <p >
          元素的背面是其正面的镜像。虽然在 2D 中不可见，但是当变换导致元素在 3D 空间中旋转时，背面可以变得可见。 （此属性对 2D 变换没有影响，它没有透视。）
        </p>
      </div>
    </div>
  </div>
}

export default CSS3DPage;