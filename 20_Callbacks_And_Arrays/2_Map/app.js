// map
// creates a new array with the results of calling a callback on every element in the array

// generates a new copy of array when you need a portion of data or transform every element

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const doubles = numbers.map(function(num) {
    return num * 2;
})

console.log(doubles);


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

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
})

console.log(titles)


/* 
Map Practice
It's time to get practice with the map method!

Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

e.g.,

console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus'] */

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(name) {
    return name.first;
})

console.log(firstNames);