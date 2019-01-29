const capitalize = str =>
  str
    .split("")
    .map(cha => cha.toUpperCase())
    .join("");

it("should take a string and convert it to capitalize", () => {
  //const capitalize = str => {
  //first convert the string to an array
  //const tempStrArr = str.split('');
  //then convert the array elements to capital letters
  //const tempArr = tempStrArr.map(cha => cha.toUpperCase());
  //join the array back to a standard string
  // return tempArr.join('');
  //};
  expect(capitalize("hello")).toEqual("HELLO");
});

const swapCase = str =>
  str
    .split(" ")
    .map((word, idx) => (idx % 2 === 0 ? capitalize(word) : word))
    .join(" ");

it("should take sentence and swapcase for each word", () => {
  //const swapCase = str => {
  //take a str convert it to an array
  //const tempStrArr = str.split(' ');
  //const callBackFunc = (word, idx) =>
  // idx % 2 === 0 ? capitalize(word) : word;
  //const tempArr = tempStrArr.map(callBackFunc);
  //return tempArr.join(' ');
  // for that array run map method
  //for given case make, if the case is true capitalize the word if not return the word
  //};

  expect(swapCase("hello world, it is a good day")).toEqual(
    "HELLO world, IT is A good DAY"
  );
});

it("arrayToObject function should convert an array to object", () => {
  const myDataSet = [
    {
      id: 1,
      genre: "Crime|Drama",
      title: "Godfather: Part II, The",
      time: "7:47 PM",
      theaterAddress: "228 Manley Drive"
    },
    {
      id: 2,
      genre: "Drama|Mystery|Romance",
      title: "Good Time Girls, The (Bonnes femmes, Les)",
      time: "2:47 PM",
      theaterAddress: "0933 Schiller Trail"
    },
    {
      id: 3,
      genre: "Action|Drama|Thriller",
      title: "Bullies",
      time: "10:44 PM",
      theaterAddress: "092 4th Drive"
    }
  ];

  const expected = {
    1: {
      id: 1,
      genre: "Crime|Drama",
      title: "Godfather: Part II, The",
      time: "7:47 PM",
      theaterAddress: "228 Manley Drive"
    },
    2: {
      id: 2,
      genre: "Drama|Mystery|Romance",
      title: "Good Time Girls, The (Bonnes femmes, Les)",
      time: "2:47 PM",
      theaterAddress: "0933 Schiller Trail"
    },
    3: {
      id: 3,
      genre: "Action|Drama|Thriller",
      title: "Bullies",
      time: "10:44 PM",
      theaterAddress: "092 4th Drive"
    }
  };

  //should take an array, should take a specific key
  // const arrayToObject = (arr, key) => {
  //   const mappedArray = arr.map(item => ({ [item[key]]: item }));
  //   return Object.assign({}, ...mappedArray);
  // };
  const arrayToObject = (arr, key) =>
    Object.assign({}, ...arr.map(item => ({ [item[key]]: item })));
  //take the item, assign the specific key as the unique property
  //assign the item to that key
  //in the end, end result should be an object
  // example console.log(arrayToObject(myDataSet, 'title'));
  expect(arrayToObject(myDataSet, "id")).toEqual(expected);
});
