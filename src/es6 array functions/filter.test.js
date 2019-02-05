/**
 * Array.filter
 * Is an array method.
 * Array.filter(callBackFunction)
 *
 * What are the callBackFunctions parameters
 * arrayElements, idx, array
 *
 * const callBackFunction = (element,idx,arrray)=>{}
 *
 * We usually call this function a predicate function
 *
 * the callBackFunction end result should be a boolean value
 *
 * Array.filter also returns a brand new array. So it never mutates the original array
 */

const dataSet = [
  {
    id: 1,
    first_name: 'Frasquito',
    last_name: 'Slowan',
    gender: 'Male'
  },
  {
    id: 2,
    first_name: 'Tallulah',
    last_name: 'Prosh',
    gender: 'Female'
  },
  {
    id: 3,
    first_name: 'Brittan',
    last_name: 'Blown',
    gender: 'Female'
  },
  {
    id: 4,
    first_name: 'Tommy',
    last_name: 'Kingswell',
    gender: 'Female'
  },
  {
    id: 5,
    first_name: 'Kayne',
    last_name: 'Brisker',
    gender: 'Male'
  }
];

it('should return an array of data which only includes female', () => {
  const expected = [
    {
      id: 2,
      first_name: 'Tallulah',
      last_name: 'Prosh',
      gender: 'Female'
    },
    {
      id: 3,
      first_name: 'Brittan',
      last_name: 'Blown',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Tommy',
      last_name: 'Kingswell',
      gender: 'Female'
    }
  ];

  const filteredArray = dataSet.filter(item => {
    return item.gender === 'Female';
  });

  console.log(dataSet);
  expect(filteredArray).toEqual(expected);
});

const peopleDataSet = [
  {
    id: 1,
    first_name: 'Jacky',
    last_name: 'Jeckell',
    gender: 'Female',
    credit_card: 'instapayment'
  },
  {
    id: 2,
    first_name: 'Garfield',
    last_name: 'Torbett',
    gender: 'Male',
    credit_card: 'diners-club-enroute'
  },
  {
    id: 3,
    first_name: 'Nellie',
    last_name: 'Wandrey',
    gender: 'Female',
    credit_card: 'jcb'
  },
  {
    id: 4,
    first_name: 'Chance',
    last_name: 'Chattington',
    gender: 'Male',
    credit_card: 'americanexpress'
  },
  {
    id: 5,
    first_name: 'Nichole',
    last_name: 'Whacket',
    gender: 'Male',
    credit_card: 'jcb'
  }
];

//problem is return an array that only includes credit_Card type jcb and gender is female
//Doran
it('function return credit card type to be jcb and gender = female', () => {
  const filteredArray = peopleDataSet.filter(
    person => person.gender === 'Female' && person.credit_card === 'jcb'
  );
  const expected = [
    {
      id: 3,
      first_name: 'Nellie',
      last_name: 'Wandrey',
      gender: 'Female',
      credit_card: 'jcb'
    }
  ];

  expect(filteredArray).toEqual(expected);
});

const movieDataSet = [
  {
    id: 1,
    title: 'Invisible War, The',
    genre: 'Crime|Documentary|Drama|War',
    address: '7764 Golf Course Hill',
    show_time: '4:29 PM'
  },
  {
    id: 2,
    title: 'Presenting Lily Mars',
    genre: 'Comedy|Musical|Romance',
    address: '5 Green Ridge Point',
    show_time: '9:50 PM'
  },
  {
    id: 3,
    title: 'Across the Bridge',
    genre: 'Crime|Drama|Thriller',
    address: '6 Mallard Junction',
    show_time: '10:42 AM'
  },
  {
    id: 4,
    title: 'Captive, The (Prisonnière, La)',
    genre: 'Animation|Fantasy',
    address: '9259 Brown Road',
    show_time: '3:49 PM'
  },
  {
    id: 5,
    title: 'Run Ronnie Run',
    genre: 'Comedy',
    address: '36029 Bartelt Crossing',
    show_time: '2:37 PM'
  },
  {
    id: 6,
    title: 'Sarah Silverman:  We Are Miracles',
    genre: 'Comedy',
    address: '29 Fairfield Center',
    show_time: '1:43 PM'
  },
  {
    id: 7,
    title: 'King Arthur',
    genre: 'Action|Adventure|Drama|War',
    address: '7275 Dawn Alley',
    show_time: '11:56 AM'
  },
  {
    id: 8,
    title: 'Ju-on: The Grudge 2',
    genre: 'Horror',
    address: '516 Golf View Circle',
    show_time: '3:42 PM'
  }
];

it('should calculate the number of movies shown after 3pm', () => {
  const convertedDataSet = movieDataSet.map(movie => ({
    ...movie,
    show_time: new Date(`29 Jan 2019 ${movie.show_time}`)
  }));

  const filteredArray = convertedDataSet.filter(
    movie => movie.show_time > new Date('29 Jan 2019, 15:30')
  );

  expect(filteredArray.length).toEqual(4);
});

it('should calculate the number of movies shown after 3pm', () => {
  const convertedDataSet = movieDataSet.map(movie => ({
    ...movie,
    show_time: new Date(`29 Jan 2019 ${movie.show_time}`)
  }));

  let count = 0;

  const filteredArray = convertedDataSet.filter(movie => {
    if (movie.show_time > new Date('29 Jan 2019, 15:00')) {
      count++;
      return true;
    } else return false;
  });

  expect(count).toEqual(4);
});
