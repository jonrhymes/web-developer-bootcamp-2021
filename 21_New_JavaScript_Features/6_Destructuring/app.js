// destructuring
// short, clean syntax to 'unpack'
// values from arrays, properties from objects into distinct variables


const scores = [949632, 889092, 776059, 66439, 504924, 234516, 111023]

const highScore = scores[0];
const secondHighScore = scores[1];

// destructuring from an array
// order matters
const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold, silver, bronze, everyoneElse);
// 949632 889092 776059 [ 66439, 504924, 234516, 111023 ]


// destructuring from an object
const user = {
    email: 'harvey@gmail.com',
    password: 'ScotSmith1984',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Milk was an American politician and first openly gay elected official in the history of California.',
    city: 'San Francisco',
    state: 'California'
}

// const email = user.email;
// the same as...

// variable must be called the same name
const { email, firstName, lastName, city, bio } = user;

// doesn't change original variable
console.log(email)
console.log(firstName)
console.log(lastName) 
console.log(city)
console.log(bio)

// extract property into newly named variable
const { born: birthYear, died: deathYear } = user;
console.log(birthYear);
console.log(deathYear);

// can add default values
const user2 = {
    email: 'abbi@gmail.com',
    firstName: 'Abigail',
    lastName: 'Thornsberry',
    born: 2011,
    cityBorn: 'Clearwater',
    stateBorn: 'Florida'
}

// can't change Clearwater to Tampa even though a default value was provided because it has a value already in the object
const { stateBorn: state, cityBorn: cities = 'Tampa', school = 'Abbott Elementary', died = 'N/A' } = user2;

console.log(state, school, died, cities)
// Florida Abbott Elementary N/A Clearwater


// destructuring params
function fullName({firstName, lastName, nickName = "Harv"}) {
    return `${firstName} ${lastName} ${nickName}`
}

console.log(fullName(user));



const movies = [
    {
        title: 'Jurassic World Dominion',
        score: 50,
        year: 2022
    },
    {
        title: 'Nope',
        score: 100,
        year: 2022
    },
    {
        title: 'Don\'t Worry Darling',
        score: 90,
        year: 2023
    },
    {
        title: 'The Whale',
        score: 95,
        year: 2023
    },
    {
        title: 'Hocus Pocus 2',
        score: 85,
        year: 2022
    },
];

// const filteredMovies = movies.filter((movie) => movie.score >= 90)
const filteredMovies = movies.filter(({score}) => score >= 90)
console.log(filteredMovies);


const destructuredMovies = movies.map(({title, year, score}) => {
    return `${title} (${year}) is rated ${score}`;
})
console.log(destructuredMovies);