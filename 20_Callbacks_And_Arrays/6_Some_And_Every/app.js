// Boolean methods

// every
// tests whether all elements in the array pass the provided function. It returns a Boolean value

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

console.log(exams.every(score => score >= 75)) // returns true


// some
// similar to every, but returns tru if ANY of the array elements pass the test function

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
]

console.log(movies.some(movie => movie.year > 2022)) // returns true

// doesn't return anything but true / false
// if you want a new array, use filter

const allEvens = (arr) => arr.every((el) => 
    el % 2 === 0
)

console.log(allEvens([2,4,6,8])) // returns true
