// methods
// functions that are properties on objects
// accessed by dot notation

const math = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    },
    divideByTwo(num) { // shorthand, no colon needed
        return num / 2;
    }
}

console.log(math.square(9)); // 81
// or can do this:
console.log(math['cube'](3)); // 27
console.log(math.divideByTwo(14));

// define an object called square
const square = {
    area(side) {
        // return side ** 2;
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

console.log(square.area(10))
console.log(square.perimeter(10))