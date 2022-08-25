// loops allow repetition of code
    // print "hello" x 10
    // sum all numbers in array

// types of loops:
    // for loop
    // while loop
    // for ... of loop
    // for ... in loop

// for (
    // [initialExpression];
    // [condition];
    // [incrementExpression];
// )

//  start at 1, stop at 10, add 1 each time
for(let i = 1;  i <= 10;    i++) {
    console.log(i);
}

for(let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// count down from 100
for(let i = 100; i >= 0; i -= 10) {
    console.log(i);
}