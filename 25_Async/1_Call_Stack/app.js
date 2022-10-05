// call stack
// last in, first out (LIFO)

const multiply = (x,y) => x * y;

const square = x => multiply(x,x);

const isRightTriangle = (a,b,c) => {
   return square(a) + square(b) === square(c)
}

console.log(isRightTriangle(3,4,5)); // true
console.log(isRightTriangle(3,4,8)); // false