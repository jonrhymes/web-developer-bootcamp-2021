// filter
// creates a new array with all elements that pass the test implemented by the provided function

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const filtered = numbers.filter(n => {
    return n <= 10
})

console.log(filtered)

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

const goodMovies = movies.filter(movie => {
    return movie.score > 85
})
console.log(goodMovies);

const badMovies = movies.filter(m => m.score <= 85)
console.log(badMovies);

const futureMovies = movies.filter(m => m.year == 2023)
console.log(futureMovies);

/*
Filter Exercise
Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]
*/

usernames = ["kim", "kanye", "pete", "asqertoiu098ghh2n", "as090q49t73thdsfgnboasfm", "staceysmom1978", "sadie", "jon", "alison", "arlo"]

function validUserNames(usernames) {
    return usernames.filter(username => username.length < 10)
}

console.log(validUserNames(usernames))