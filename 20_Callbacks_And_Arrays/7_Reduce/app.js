// reduce
// executes a reducer function on each element of the array, resulting in a single value
// via comparison or math
// can specify a starting point


// summing an array
// loops through array as callbacks, continuing to add to the accumulator. finally returns a single value
const reduced = [3,5,7,9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

// 3 + 5 = 8
// 8 + 7 = 15
// 15 + 9 = 24
// 24 + 11 = 35

console.log(reduced); // = 35

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// using for ... of loop
let total = 0;
for(let price of prices) {
    total += price;
}
console.log(total); // 111.97

// using reduce 
const totals = prices.reduce((total, price) => {
    return total + price;
});

console.log(totals); // 111.97

// using implicit return, on one line
const totaled = prices.reduce((total, price) => total + price);
console.log(totaled); // 111.97


// min in array
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

console.log(minPrice);

// max in array
const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})

console.log(maxPrice);



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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

console.log(highestRated);

// can submit a second argument as the starting point
const evens = [2,4,6,8];
const theevens = evens.reduce((sum, num) => sum + num, 100);

console.log(theevens); // = 120