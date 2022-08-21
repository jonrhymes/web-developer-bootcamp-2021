// concat merges two arrays into one new array
let cats = ['bella','maisy','cooper'];
let dogs = ['sadie','bear'];

let catsAndDogs = cats.concat(dogs);
console.log(catsAndDogs);
// original cats array stays the same
console.log(cats);


// includes returns a boolean value
console.log(cats.includes('blue')); // returns false
console.log(catsAndDogs.includes('bear'));
// returns true


// indexOf returns the first index that an element is found or -1 if not present
console.log(cats.indexOf('blue')); // -1
console.log(cats.indexOf('bella')); // 0 at first index


// reverse returns reversed array in place
// destructive method - it destroys the original array
console.log(catsAndDogs.reverse());
