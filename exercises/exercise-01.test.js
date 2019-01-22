// 1.  Write a function capitalize that takes a string and
// uses`.map` to return the same string in all caps.Write test to it.

it("should return the same string in all caps.", () => {
  const string = "hello world";

  const capitalize = string
    .split()
    .map(cap => cap.toUpperCase())
    .join();

  //THIS WORK AS WELL
  //     const capitalize = Object.values(string)
  // .map(cap => cap.toUpperCase())
  // .join('');
  expect(capitalize).toEqual("HELLO WORLD");
});

// 2.  Now write a new function called swapCase that takes a string of words and uses.map and your newly written capitalize()
// function to return a string where every other word is in all caps.Write a test to test the function.
// ```js
//     ex: const string = 'hello world'
//     will return 'hello WORLD'
//     ```
it("should return a string where every other word is all caps.", () => {
  const word = "hello world";

  const capitalize = item =>
    item
      .split()
      .map(c => c.toUpperCase())
      .join();

  const swapCase = Object.values(word)
    .map((w, idx) => (idx % 2 ? capitalize(w) : w))
    .join("");

  expect(swapCase).toEqual("hello WORLD");
});

// 3.  Convert the mock - data set to an object where movieId will be the unique key for each item.
//     ```js
//     //example
//     const moviesById = {
//       1: { id: 1, name: '', title: '', time: '', theaterAddress: '' },
//       2: { id: 1, name: '', title: '', time: '', theaterAddress: '' }
//     };
//     ```
it("should return new data set with unique keys", () => {
  const moviesById = {
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

  const movies = Object.values(moviesById).map(m => ({ movieId: m.id }));
  expect(movies).toEqual([{ movieId: 1 }, { movieId: 2 }, { movieId: 3 }]);
});
