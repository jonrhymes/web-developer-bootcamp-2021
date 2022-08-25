// array is an object
console.log(typeof []); // = "object"

// use curly braces to declare an object and put data IN
const person = {firstName: 'Mick', lastName: 'Jagger'}

const kitchenSink = {
    favNum: 93210485,
    isFunny: true,
    colors: ['red','blue']
}

// use square brackets to get data OUT
console.log(person['lastName']);
console.log(kitchenSink["colors"]);

// or use dot notation
console.log(kitchenSink.favNum);

// VALID KEYS:
// All keys are converted to strings (except for symbols) whether it's a boolean or number, etc.
const years = {1999: "Party", 2002: "Graduate"};

console.log(years[1999]);
console.log(years["1999"]);

// can put expressions in square brackets
console.log(person['first' + 'Name']);

let birthyear = 2002;
console.log(years[birthyear]);