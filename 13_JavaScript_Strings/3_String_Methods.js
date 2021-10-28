// methods are built-in actions we can perform with strings

// - search within a string
// - replace part of a string
// - changing the casing of a string

console.log("lol".toUpperCase());

let msg = 'I am king';
let yellMsg = msg.toUpperCase(); // 'I AM KING'

let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase(); // 'leave me alone'

// the value in angry is unchanged
angry;

let userInput = "   hello my name is alisjon sadie rhymes  ";
userInput.trim(); // trims leading and trailing space

"udemy bootcamp       ".trim(); // "udemy bootcamp"

// chaining methods
let greeting = " hello again!!!      ";
greeting.trim().toUpperCase(); // "HELLO AGAIN!!!"


// Practice

const message = "    TASTE THE RAINBOW!   ";
let whisper = message.toLowerCase().trim();

console.log(message + "becomes \n" + whisper);