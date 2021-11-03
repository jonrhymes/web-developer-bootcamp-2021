// logical operators
// - && : AND
// - || : OR
// - ! : NOT

// &&
// - both sides must be true for the entire thing to be true

// true && true = true
// true && false = false
// false && false = false
// false & true = false

// AND (&&) takes precedence over OR (||)

// console.log(1 === 1 && 2 < 7); // true

const password = prompt("Enter your password");

if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD")
}