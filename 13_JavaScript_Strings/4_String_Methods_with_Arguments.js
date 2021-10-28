// arguments are inputs that we can pass in. we pass the arguments inside of the parentheses

// thing.method(arg)
// some methods accept arguments that modify their behavior


// indexOf
// finds the first instance of something. commonly used to see if a string contains a character
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)

"haha that is so funny".indexOf(' '); // 4
"haha that is so funny".indexOf('$'); // -1
"haha that is so funny".indexOf('y'); // 20


// slice
// accepts more than one argument
// str.slice(beginIndex[, endIndex]) where endIndex is optional

// makes a new copy of the string

let laugh = "haha that is so funny!";
laugh.slice(5); // "that is so funny"

console.log(laugh); // "haha that is so funny!", unchanged

// negative values take from the end and slice to index 0
laugh.slice(-1); // '!'
laugh.slice(-2); // 'y!'
laugh.slice(-3); // 'ny!'


// replace
// state what you want to replace, and with what
// replaces 1st matching instance
let annoyingLaugh = 'teehee so funny! teehee!';

annoyingLaugh.replace('teehee', 'haha'); // 'haha that is so funny! teehee!'

// replaceAll
// replaces every instance
annoyingLaugh.replaceAll('teehee', 'haha'); // 'haha that is so funny! haha!'


// repeat
"lol".repeat(10); // 'lollollollollollollollollollol'


// Practice
const word = "skateboard";
// extract 'board' from 'skateboard'

// replace the 'o' with an 'e'

// save the result in a var
let facialHair = word.slice(5).replace('o', 'e');