// forEach
// accepts a callback function
// calls the function once per element in the array

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function print(element) {
    console.log(element);
}

// numbers.forEach(print);

// not common to pass in a named function you've already created

// it's more common to pass an anonymous function you define on the fly
numbers.forEach(function(el) {
    if(el % 2 === 0) {
        console.log(el);
    }
})

// newer way of doing the same thing
for(let el of numbers) {
    console.log(el);
}

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

// must include element (movie) as parameter in function in order to execute
movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})