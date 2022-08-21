// shift removes from beginning of array

let movieLine = ['tom','nancy','pablo','oliver','eva'];

movieLine.shift();
// and returns the first item in array - 'tom'

let nextPatron = movieLine.shift();
// = 'nancy'


// unshift adds to beginning of array

movieLine.unshift('denise','kevin','carly');

console.log(movieLine);