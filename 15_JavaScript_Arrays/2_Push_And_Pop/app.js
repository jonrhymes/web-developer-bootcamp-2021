let movieLine = ['tom', 'nancy'];

movieLine[2] = 'pablo'

movieLine.push('sadie', 'harry');

// unlike let, push updates the original array
// push returns the length of the new array

// pop doesn't require any arguments
// it returns the last thing in the array and it removes it from the array
movieLine.pop();

let person = movieLine.pop(); // = 'harry'



