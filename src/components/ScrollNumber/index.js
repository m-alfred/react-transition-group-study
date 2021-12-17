import React, { useState, useEffect, useRef } from  'react'
import classNames from 'classnames';

import { computeDiff } from './util'

import './index.less';

const usePrevious = (value) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 * 解析css值和单位
 * @param value 
 * @returns 
 */
 const parseCssValue = (value) => {
  const cssValueReg = /^(\d+(\.\d+)?)([a-zA-Z]*)$/;
  const match = cssValueReg.exec(value);
  console.log('match:', match);
  
  return {
    value: isNaN(Number(match?.[1])) ? 0 : Number(match?.[1]),
    unit: match?.[3] || 'px'
  }
}

const ScrollNUmber = (props) => {
  const {
    className,
    style,
    prefix = 'scroll-number',
    number = 0,
    durationOnce = 200,
    delayOnce = 120,
    timingFunction = 'ease-out',
    height = '1em',
    cellMinWidth = '0.7em',
    ...restProps
  } = props;

  const [animNumList, setAnimNumList] = useState([]);
  const [transformList, setTransformList] = useState([]);
  const prevNum = usePrevious(number);

  
  useEffect(() => {
    if (prevNum === number) {
      return;
    }
    let list = [];
    console.log('prevNum:', prevNum, number);

    const animNumList = computeDiff(prevNum, number);
    animNumList.forEach((item, idx) => {      
      const {
        value,
        unit
      } = parseCssValue(height);

      list.push({
        translateY: `${-(item.length - 1) * value }${unit}`,
        duration: `${(item.length - 1) * durationOnce}ms`,
        delay: delayOnce * idx + 'ms',
        property: 'transform'
      })
    });
    setAnimNumList(animNumList);
    console.log('animNumList:', animNumList);
    // 延迟为了触发动画。。
    setTimeout(() => {
      setTransformList(list);
    }, 100);
  }, [number, prevNum, durationOnce, delayOnce, height]);

  const handleTransitionEnd = (item, i) => {
    setAnimNumList(prev => {
      const cloneList = [...prev];
      // 结束后展示最后一个元素
      cloneList.splice(i, 1, [cloneList[i][cloneList[i].length - 1]])
      return cloneList;
    });
    // 移除动画偏移
    setTransformList(prev => {
      const cloneList = [...prev];
      cloneList.splice(i, 1, {
        ...cloneList[i],
        translateY: 0,
        property: 'none'
      })
      return cloneList;
    });
  }
  const wrapCls = classNames(prefix, className);

  return(
    <div className={wrapCls} style={style} {...restProps} >
      {
        animNumList.map((item,i) => <div className={`${prefix}-cell`} key={i} 
          style={{
            width: item.length === 1 && item?.[0] === '' ? 0: 'auto',
            height,
          }}
        >
          <div 
            className={`${prefix}-cell-list`}
            style={{ 
              transform: `translateY(${transformList[i]?.translateY})`,
              transitionDelay: transformList[i]?.delay,
              transitionDuration: transformList[i]?.duration,
              transitionProperty: transformList[i]?.property,
              transitionTimingFunction: timingFunction,
              WebkitTransform: `translateY(${transformList[i]?.translateY})`,
              WebkitTransitionDelay: transformList[i]?.delay,
              WebkitTransitionDuration: transformList[i]?.duration,
              WebkitTransitionProperty: transformList[i]?.property,
              WebkitTransitionTimingFunction: timingFunction,
            }}
            onTransitionEnd={() => handleTransitionEnd(item, i)}
            >
              {item && item[0] === '.' 
                ? '.' 
                : item.map((digit, j) => 
                  <div 
                    key={j} 
                    className={`${prefix}-cell-list-item`}
                    style={{ height, minWidth: cellMinWidth }}
                  >
                    {digit}
                  </div>
              )}
          </div>
        </div>)
      }
    </div>
  )
}
export default ScrollNUmber