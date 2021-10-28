// math object
// contains properties and methods for mathematical constants and functions

Math.PI // 3.1415926535

// rounding a number
Math.round(4.9); // 5

// absolute value
Math.abs(-456); // 456

// raises 2 to the 5th power
Math.pow(2,5); // 32

// removes decimal
Math.floor(3.9999); // 3

// rounds up
Math.ceil(34.01); // 35
Math.ceil(34.999); // 35

// random
// chooses a random number between 0 and 1, and will never include 0 or 1
Math.random(); // 0.14502435424141957

Math.random(); // 0.8937425043112937

Math.random(); // 0.9759952148727442


// random integers
// takes more work

// generate random numbers between 1 and 10
const step1 = Math.random(); // 0.524800523277188
const step2 = step1 * 10; // 5.24800523277188
const step3 = Math.floor(step2); // 5
const step4 = step3 + 1; // 6

Math.floor(Math.random() * 10) + 1;


// generate random numbers between 1 and 5
Math.floor(Math.random() * 5) + 1;


// generate a random number between 20 and 22
Math.floor(Math.random() * 3) + 20;
// shift up last number to start
// multiply by the possible outcome: 20, 21, 22 (3)


// generate a random number between 1 and 100
Math.floor(Math.random() * 100) + 1;


// Practice
const die1 = Math.floor(Math.random() * 6) + 1; // random number from 1 to 6
const die2 = Math.floor(Math.random() * 6) + 1; // random number from 1 to 6

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;

console.log(roll);