import React, { useState } from 'react';
import HuaPigNumber from "components/ScrollNumber";

const  HuaPigNumberPage = () => {
  const [number, setNumber] = useState(12.888);
  const add = () => {
    setNumber(prev => Number((prev + 10).toFixed(3)))
  }

  const sub = () => {
    setNumber(prev=> Number((prev - 10).toFixed(3)))
  }

  const addRandom = () => {
    setNumber(prev => Number((prev + Math.ceil(Math.random() * 1000)).toFixed(3)))
  }

  return <div >
      <HuaPigNumber number={number} durationOnce={200}/>
      <button type='button' onClick={add}>加10</button>
      <button type='button' onClick={sub}>减10</button>
      <button type='button' onClick={addRandom}>加1-1000随机数</button>
    </div>
}

export default HuaPigNumberPage;