// arrays
// ordered collection of values
// arrays are indexed

function addTwo(a, b) {
    let t = a + b;
    console.log(t);
}

addTwo(10, 30);

// To make an empty array
let students = [];

// an array of strings
let colors = ['red', 'orange', 'yellow'];

colors[0] = 'blue'
console.log(colors) // updates array element ['blue', 'orange', 'yellow']

colors[10] = 'indigo';
console.log(colors) // ['blue', 'orange', 'yellow', empty x 7, 'indigo]

let days = ['friday', 'saturday', 'sunday'];

days[0] // 'friday'
days[1][1] // 's'
days[4] // undefined

// array of numbers
let lottoNums = [18,33,2,59,20];

// a mixed array
let stuff = [true, 60, 'cat', null];

console.log(students);