const math = require('./math');
// const {PI, square} = require('./math');

// require a directory
const shelter = require('./shelter');

console.log(math);
// { add: [Function: add], PI: 3.14159, square: [Function: square] }

console.log(math.PI);
console.log(math.add(2,91));
console.log(math.square(11));

// after destructuring:
const { PI, add, square } = require('./math');
console.log(PI);
console.log(add(2,91));
console.log(square(11));


// object:
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

console.log("Required an entire direcotry!", shelter)

module.exports = math;