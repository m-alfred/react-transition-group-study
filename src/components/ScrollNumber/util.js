/**
 * 创建滚动数字每一位上的数值变化
 * @param {*} from 
 * @param {*} to 
 * @returns 
 */
export function createAnimCell(from, to) {
  const numList = [];
  if (to === '' && from === '') {
    return [''];
  }
  if (to === '') {
    // 3 - '', [3, 2, 1 , 0 , '']
    for (let i = from; i >= 0; i--) {
      numList.push(i);
    }
    numList.push('');
    return numList;
  }
  if (from === '') {
    // '' - 3, ['', 0, 1, 2, 3]
    for (let i = to; i >= 0; i--) {
      numList.unshift(i);
    }
    numList.unshift('');
    return numList;
  }
  if (from <= to) {
    // 结束值大于起始值，直接从起始值滚动到结束值，比如1-5, [1,2,3,4,5], 3-3, [3]
    for (let i = from; i <= to; i++) {
      numList.push(i);
    }
  } else {
    // 结束值小于等于起始值, 7 - 6，结束值增到两位数值16，[7, 8 , 9 , 0, 1 , 2, 3, 4, 5, 6]
    for (let i = from; i <= to + 10; i++) {
      if (i >= 10) {
        numList.push(i - 10);
      } else {
        numList.push(i)
      }
    }
    
  }

  return numList
}

/**
 * 用空字符串补齐两个数字相差的位置
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
export function padding (num1, num2) {
  let arr = String(num1).split('').map(item => item === '.' ? item : Number(item));
  let compareArr = String(num2).split('').map(item => item === '.' ? item : Number(item));
  // const len = Math.max(arr.length, compareArr.length);
  const decimalPointIndex1 = arr.findIndex(n => n === '.');
  const decimalPointIndex2 = compareArr.findIndex(n => n === '.');

  const intPart1 = arr.slice(0, decimalPointIndex1 > -1 ? decimalPointIndex1 : arr.length);
  const intPart2 = compareArr.slice(0, decimalPointIndex2 > -1 ? decimalPointIndex2 : compareArr.length);

  const fractPart1 = decimalPointIndex1 === -1 ? [] 
    : arr.slice(decimalPointIndex1 + 1, arr.length)
  const fractPart2 = decimalPointIndex2 === -1 ? [] 
    : compareArr.slice(decimalPointIndex2 + 1, compareArr.length)

  const fixIntPart1 = [...intPart1];
  while(fixIntPart1.length < Math.max(intPart1.length, intPart2.length)) {
    fixIntPart1.unshift('');
  }
  const fixIntPart2 = [...intPart2];
  
  while(fixIntPart2.length < Math.max(intPart1.length, intPart2.length)) {
    fixIntPart2.unshift('');
  }

  const fixFractPart1 = [...fractPart1];
  while(fixFractPart1.length < Math.max(fractPart1.length, fractPart2.length)) {
    fixFractPart1.push('');
  }

  const fixFractPart2 = [...fractPart2];
  while(fixFractPart2.length < Math.max(fractPart1.length, fractPart2.length)) {
    fixFractPart2.push('');
  }

  const r1 = [...fixIntPart1, '.', ...fixFractPart1];
  const r2 = [...fixIntPart2, '.', ...fixFractPart2];

  if (r1[r1.length - 1] === '.') {
    r1.pop();
  } 
  if (r2[r2.length - 1] === '.') {
    r2.pop();
  } 
  return [
    r1,
    r2
  ]
}

export const computeDiff = (from, to) => {
  const diffList = [];

  const [r1, r2] = padding(String(from), String(to));

  for (let i = 0; i < r1.length ; i ++) {
    diffList[i] = [r1[i], r2[i]]
  }
  const animNumList =  diffList.map(([num1, num2]) => createAnimCell(num1, num2));
  return animNumList;
}