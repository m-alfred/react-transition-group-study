import { createAnimCell, padding } from './util';

test('createAnimCell [9,7]', ()=> {
  expect(createAnimCell(9,7)).toEqual([9,8,7])
})

test('createAnimCell [6,7]', ()=> {
  expect(createAnimCell(6,7)).toEqual([6,5,4,3,2,1,0,9,8,7])
})

test('padding 12.77 with 7.77', ()=> {
  expect(padding(12.77,7.77)).toEqual([[1,2,'.',7,7],['',7,'.',7,7]])
})

test('padding 5555 with 777', ()=> {
  padding(5555,777)
  expect(padding(5555,777)).toEqual([[5,5,5,5],['',7,7,7]])
})

test('padding 12.77 with 10', ()=> {
  expect(padding(12.77,10)).toEqual([[1,2,'.',7,7],[1,0,'.', '', '']])
})

test('padding 12.77 with 0.1', ()=> {
  expect(padding(12.77,0.1)).toEqual([[1,2,'.',7,7],['',0,'.', 1, '']])
})