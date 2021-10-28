// Strings are Indexed
// each character has a corresponding index (a positional number)

let chicken = "chicken";

console.log(chicken.charAt(2));

// access character with brackets
let animal = "Dumbo Octopus";
animal[0] // 'D'
animal[5] // ' ' , a space

"lol".length // 3
"lol"[0] // 'l'


let phone = "(407)489-8643";
phone[0]; // checks first character


// Strings have built in property called length

animal.length; // 13
// length is always 1 more than index because indices start at 0

// concatenation
"lol" + "LOL" // "lolLOL"

let firstName = "River";
let lastName = "Phoenix";
firstName + lastName // RiverPhoenix, it is a new String


// can't update a character in a string, have to reassign a value if you want to change it


let fullName = firstName + " " + lastName;

let result = 1 + "hi" // results: "1hi" becomes a new string with concatenation. JS coerces this to a common, permissable type

typeof result; // 'string'

const city = 'Kyoto';
const country = 'Japan';
const combo = city + country;

console.log(combo);

let year = "1998";
year + 1 // "19981"