// spread in function calls
// expands an iterable (array, string, etc.) into a list of arguments

const nums = [9,3,8,2]
// Math.max(nums); // NaN - because it's anticipating separate arguments instead of a single array

// use spread!
console.log(Math.max(...nums)); // 9
console.log(Math.min(...nums)); // 2

console.log(...'hello'); // h e l l o
console.log('h','e','l','l','o'); // same as: h e l l o