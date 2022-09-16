// rest params
// collects all remaining arguments into an actual array

// arguments is a special keyword that can't be used, only printed
// arguments object are available inside every function
// they're an array-like object - have length property, can't do push/pop
// contains all arguments inside function
// not available inside arrow functions

function sum(){
    console.log(arguments);
}

sum(34,65,77); 
// [Arguments] { '0': 34, '1': 65, '2': 77 }


// rest params
function sum(...nums) {
    console.log(nums);
}
 
// rest params becomes an array
sum(45,65,77); // [ 45, 65, 77 ]

// rest params becomes an array you can use methods on
function sumAll(...nums) {
    return nums.reduce((total, el) => total += el);
}

console.log(sumAll(1,2,3)); // 6

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults('Tammy', 'Todd', 'Tina', 'Travis', 'Tommy');