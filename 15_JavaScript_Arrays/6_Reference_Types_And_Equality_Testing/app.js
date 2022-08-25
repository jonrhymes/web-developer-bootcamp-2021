// arrays are unique when it comes to equality

['hi','bye'] === ['hi','bye'] // false

[1] == [1] // false

// with arrays, JavaScript compares references NOT what's contained in the arrays

// maximum amount of memory allocated to variables - an array has its own reference in memory

let nums = [1,2,3];
let numsCopy = nums; // they are inextricably linked so when you update nums, you also update numsCopy and vice versa

nums.push(4);
// numsCopy = [1,2,3,4]; 

nums === numsCopy // true