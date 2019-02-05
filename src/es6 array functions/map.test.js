//map method
const fooArr = [1, 2, 3, 4, 5];
//const callBackFunc = (item, idx, array) => { }
//const foo = fooArr.map((item, idx)=>{});
//const foo = fooArr.map(callBackFunc)

// problem: add item 'B' to the second position,
// but don't mutate the original array
it("let's use map method to manipulate data and create copy of original array", () => {
  const myArr = [1, 2, 3, 4, 5];
  const newArr = myArr.map((item, idx) => (idx === 1 ? 'B' : item));
  //console.log('myArr', myArr);
  expect(newArr[1]).toEqual('B');
});

//problem: using studentsArray create an array that contains the first names
it("should create an array with students's first name in it", () => {
  const studentsArray = [
    {
      firstName: 'Doran',
      gradeLevel: 4,
      subject: 'Science'
    },
    {
      firstName: 'Buddhika',
      gradeLevel: 4,
      subject: 'Math'
    },
    {
      firstName: 'Erica',
      gradeLevel: 5,
      subject: 'Math'
    }
  ];

  const studentsFirstName = studentsArray.map(student => student.firstName);

  expect(studentsFirstName).toEqual(['Doran', 'Buddhika', 'Erica']);
});

//problem: using studentsData array create a new array with subjects in it,
// if the subject is Science change that subject to Math

it('create an array with subjects', () => {
  const studentsData = [
    {
      firstName: 'Doran',
      gradeLevel: 4,
      subject: 'Science'
    },
    {
      firstName: 'Buddhika',
      gradeLevel: 4,
      subject: 'Math'
    },
    {
      firstName: 'Erica',
      gradeLevel: 5,
      subject: 'Math'
    }
  ];

  const subjects = studentsData.map(student =>
    student.subject === 'Science' ? 'Math' : student.subject
  );

  expect(subjects).toEqual(['Math', 'Math', 'Math']);
});

//problem: using studentsData create an array which each item is an object whose properties are name and grade
it('should create an array with student name and grade in it', () => {
  const studentsDataById = {
    1: {
      name: 'Doran',
      subject: 'Math',
      grade: 3
    },

    2: {
      name: 'Erica',
      subject: 'Science',
      grade: 4
    },

    3: {
      name: 'Kyle',
      subject: 'Math',
      grade: 4
    },

    4: {
      name: 'Buddhika',
      subject: 'Science',
      grade: 3
    }
  };

  const studentsArray = Object.values(studentsDataById).map(student => ({
    name: student.name,
    grade: student.grade
  }));
  expect(studentsArray).toEqual([
    { name: 'Doran', grade: 3 },
    { name: 'Erica', grade: 4 },
    { name: 'Kyle', grade: 4 },
    { name: 'Buddhika', grade: 3 }
  ]);
});

//problem
//Write a JavaScript program which accept a number as input and insert dashes(-)
//between each two even numbers.For example if you accept 025468 the output should be 0 - 254 - 6 - 8
it('insertDash should insert dashes in between two even numbers', () => {
  const number = 25468;
  const expected = '254-6-8';
  const insertDash = number => {
    //convert the number to string
    //split the string to an array
    //check whether two adjacent numbers are even
    //if so add  a dash
  };

  //expect(insertDash(number)).toEqual(expected);
});
//  Erica: it('should a function that inserts dashes between each two even numbers', () => {
//   const number = '025468';

//   const insertDashes = number => {
//     number
//       .split(' ')
//       .map(digit =>
//         digit % 2 === 0 ? digit.insertBefore(' - ', digit) : digit
//       )
//       .join();
//   };

//   const expected = insertDashes(number);

//   expect(insertDashes(number)).toEqual(expected);
// });

// Doran:  it('should return a number with dashes', () => {
//   const numbers = '1,2,3,4,5,6';

//   const dashes = numbers
//     .split()
//     .map((num, idx) =>
//       (idx % 2 === 0 ? num.insertAdjacentElement('-') : num).join()
//     );

//   expect(dashes).toEqual('1,2-3,4-5,6');
// });

//Write a JavaScript function to clone an array

it('function should clone an array', () => {
  const foo = [1, 2, 3, 4, 5, 6];
  const cloneAnArray = arr => arr.map(item => item);
  const bar = cloneAnArray(foo);
  expect(foo).toEqual(bar);
});

//  Erica answer: it('should clone an array', () => {

//   const arr = [1, 2, 3];

//   const cloneArray = arr => {
//   }

//   const expected =
//    [1, 2, 3]

//   expect(cloneArray(arr)).toEqual(expected);
// })
