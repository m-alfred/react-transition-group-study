import { createAnimCell, padding } from './util';

test('createAnimCell ["",3]', ()=> {
  expect(createAnimCell('',3)).toEqual(['',0,1, 2, 3])
})

test('createAnimCell [3,""]', ()=> {
  expect(createAnimCell(3,'')).toEqual([3,2,1,0,''])
})

test('createAnimCell ["",0]', ()=> {
  console.log('createAnimCell', createAnimCell('',0));
  
  expect(createAnimCell('',0)).toEqual(['', 0])
})

test('createAnimCell ["",""]', ()=> {
  expect(createAnimCell('','')).toEqual([''])
})

test('createAnimCell [3,3]', ()=> {
  expect(createAnimCell(3,3)).toEqual([3])
})

test('createAnimCell [1,5]', ()=> {
  expect(createAnimCell(1,5)).toEqual([1,2,3,4,5])
})

test('createAnimCell [7,6]', ()=> {  
  expect(createAnimCell(7,6)).toEqual([7, 8 , 9 , 0, 1 , 2, 3, 4, 5, 6])
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