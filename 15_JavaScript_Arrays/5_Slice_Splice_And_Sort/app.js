// slice gets a copy of a portion of an array

let colors = ['red','orange','yellow','green','blue','indigo','violet'];

// makes a copy
console.log(colors.slice());

// slice passes two arguments: start and end

// if only providing one arg, it starts at that index and continues to end
console.log(colors.slice(3));

// with 2 arugments, slice stops at that index. for example, starts at index 2 and goes up to index 4 but does NOT INCLUDE 4
console.log(colors.slice(2,4)); 

// can pass negative values and will slice from the end
console.log(colors.slice(-3));


// splice removes, replaces or adds new elements IN PLACE

// start at index 5 and delete 1
console.log(colors.splice(5,1)); 
// returns an array of the deleted element = ['indigo']
console.log(colors);


// start at 1, delete nothing and add
console.log(colors.splice(1,0,'red-orange')); // returns an empty array

console.log(colors); // [ 'red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet' ]

// splice starts inserting at the index before it 
colors.splice(4,0,'yellow-green','forestgreen');

console.log(colors);
/* [
  'red',
  'red-orange',
  'orange',
  'yellow',
  'yellow-green',
  'forestgreen',
  'green',
  'blue',
  'violet'
] */


// sort converts elements into strings and compares the UTF-16 values
let scores = [1,100,70,2500,9,-12,0,34];
console.log(scores.sort()); // ! NOT a numeric sort
// [-12, 0, 1, 100, 2500, 34, 70, 9];


