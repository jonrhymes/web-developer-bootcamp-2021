// block
// loops, conditionals only exist inside the curly braces

let radius = 8;

if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!';
}

console.log(radius); // can log this
// console.log(PI); 
// but cannot log this. so why? it's a conditional, not a function
// because it's scoped to a block


// var keyword - scoped to functions but not variables
for (var i = 0; i < 5; i++) {
    var msg = "ASKLDALKSGJ";
    console.log(msg);
}

console.log(msg) // can log variable out of block scope using var
console.log(i) // can log index too! long after it's run

// but if you use let or const, variables are scoped