// default parameters

// new way - add default into params
function rollDie(numSides = 6) {
    // old way - check for undefined if nothing is passed in param
    // if(numSides === undefined) {
    //     numSides = 6;
    // }
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20));
console.log(rollDie());

function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(5,3));
console.log(multiply(7));

// order matters!
// should add default values to end of params
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}
greet("Hey", "Jude");
greet("Big Jay Oakerson");
greet("Dan Soder", "Yo", "!!!");