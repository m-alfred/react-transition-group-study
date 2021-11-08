import React, { Component } from  'react'

import { createAnimCell, padding} from './util'
import ProgressiveNum from './progressive-num-copy';


class HuaPigNumber extends Component{
  constructor(props) {
    super(props)

    this.state = {
      animNumList: this.computeDiff(42.96, 7.77)
    };
  }

  // TOOD 逻辑先默认按from > to，减小逻辑走
  computeDiff = (from, to) => {
    // 12.96 to 7.77
    let fromArr = String(from).split('');
    let toArr = String(to).split('');
    const diffList = [];
    // 获取前后较长的数字长度
    const len = Math.max(fromArr.length, toArr.length);

    const [r1, r2] = padding(String(from), String(to));

    for (let i = 0; i < len ; i ++) {
      diffList[i] = [r1[i], r2[i]]
    }
    const animNumList =  diffList.map(([num1, num2]) => createAnimCell(num1, num2));
    return animNumList;
  }

  render() {
    const {
      animNumList
    } = this.state;

    console.log('animNumList：', animNumList);
    
    return(
      <div style={{fontSize: 32}}>
        {
          animNumList.map((item,idx) => {
            if (item && item[0] === '.') {
              return '.'
            }
            return (<ProgressiveNum key={idx} list={item} time={5000}/>)
          })
        }
        <div >
        <ProgressiveNum  list={[6,5,4,3,2,1,0,9,8,7]} time={5000}/>
        </div>
        
      </div>
    )
  }
}
export default HuaPigNumber