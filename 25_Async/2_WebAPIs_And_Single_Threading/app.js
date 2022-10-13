// single threaded
// JavaScript runs at most one line of code
// takes time - will app grind to a halt

console.log("Sending request to server!"); // runs 1st
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000); // runs 3rd
console.log("I AM AT THE END OF THE FILE!") // runs 2nd

// browser does the work - uses Web APIs that handle tasks in the background and returns it to the stack in the form of a callback