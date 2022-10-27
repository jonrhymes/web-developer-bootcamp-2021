// factory functions make new unique copies of the function everytime a new Object is created

"hi".slice === "bye".slice // = true, slice method is not defined on every single string - they're defined on the prototype - hence, they're the same


// constructor function - a function that helps you make objects. Nothing gets explicitly returned
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

console.log(Color(255,0,0)); // undefined

// the 'new' operator creates an object with properties
console.log(new Color(255,40,100));
// constructor: f Color(r,g,b)

// more efficient than factory function because method is not on the object, it's on the prototype
Color.prototype.rbg = function() {
    const {r,g,b} = this; // destructure
    return `rgb(${r}, ${g}, ${b})`
};

Color.prototype.hex = function () {
    const {r,g,b} = this; // destructure
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// don't use Arrow functions. works differently with 'this'
Color.prototype.rgba = function(a=1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(40, 240, 60);
const color2 = new Color(0, 0, 0);

console.log(color2.hex === color1.hex) // true!! pointing to the same method. defined on the prototype

