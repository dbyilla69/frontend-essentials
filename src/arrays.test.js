//creating array
it('create an array using array literal with elements in it', () => {
  const alphabet = ['a', 'b', 'c'];
  expect(alphabet).toEqual(['a', 'b', 'c']);
});

it('create an array using new keyword', () => {
  const myArr = new Array();

  expect(myArr).toEqual([]);
});

it('create an array with length of 10', () => {
  const my10ItemsArr = new Array(10);
  //console.log(my10ItemsArr);
  expect(my10ItemsArr.length).toEqual(10);
});

it('create an array with 4 items in it, which the each item is a', () => {
  const myArr = new Array(4).fill('a');
  expect(myArr).toEqual(['a', 'a', 'a', 'a']);
});

it('create an array with  natural numbers 0-9 in it', () => {
  const myNumArr = [...Array(10).keys()];
  //const myNumArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  expect(myNumArr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

//access an item by idx and change the value
it('in my array make the idx = 3 to be C', () => {
  const myArr = new Array(5);
  myArr[3] = 'C';

  expect(myArr).toEqual([, , , 'C', ,]);
});

it('add D to my alpha array', () => {
  //how to use the push method, push method mutates the originbal array
  const alpha = ['a', 'b', 'c'];
  alpha.push('D');

  expect(alpha[3]).toEqual('D');
});
