// arrow functions
// syntactically compact alternative to a regular function expression

// parentheses around parameter are optional
const square = (x) => {
    return x * x;
}
console.log(square(0));

const add = function(x, y) {
    return x + y;
}

const sum = (x, y) => {
    return x + y;
}

// arrow function needs empty parentheses
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1; 
}

console.log(rollDie());


// implicit return
// can only be used with arrow functions
// and only if there's one statement, if there are more that one it won't work

// replace curly braces with parentheses
// don't need to add return keyword
const rollTheDie = () => (
    Math.floor(Math.random() * 6) + 1
)

console.log("Roll the Die:", rollTheDie());

// one line
const addIt = (a, b) => a + b



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]


// const newMovies = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => {
    `${movie.title} - ${movie.score / 10}`
})
console.log(newMovies);
