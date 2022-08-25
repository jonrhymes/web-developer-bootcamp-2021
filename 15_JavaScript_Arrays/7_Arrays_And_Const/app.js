// const arrays can change, but the rerefence is stored

const nums = [1,2,3];

nums.push(4);
// an arrow pointing to the array
nums.unshift(0);

console.log(nums);

// but it cannot be reassigned to a new array
nums = [1,2,3,4]; // because it is different in memory although it looks the same and has the same contents