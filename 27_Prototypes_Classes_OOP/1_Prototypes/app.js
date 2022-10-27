// prototypes
// template object for an array or string, etc.

// a reference to an array's function properties (i.e. push, pop, etc) are found under __proto__ in the dev tools
// dunder = double underscore

String.prototype.yell = function() {
    // console.log(this);
    return `OMG!!! ${this.toUpperCase()}!!!!! AHHHH!`;
}

// "hello".yell();

// can modify methods
Array.prototype.pop = function() {
    return 'SORRY I WANT THAT ELEMENT. I WILL NOT POP'
};