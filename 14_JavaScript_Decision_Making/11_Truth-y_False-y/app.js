// truthy and falsy values
// - all JS values have an inherent truthyness or falsyness about them

// falsy values
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN

// truthy values
// - EVERYTHING ELSE!


// when the input is "" (empty string), that is a falsy value
// it is coerced into truthyness or falsyness
// const userInput = prompt("Enter something");

// if(userInput) {
//     console.log("TRUTHY!");
// } else {
//     console.log("FALSY!");
// }


// all of the following are FALSY
if(0) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if(null) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if(undefined) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if(NaN) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if("") {
    console.log("TRUTHY")
} else {
    console.log("FALSY empty string")
}

// a string with a space is truthy
if(" ") {
    console.log("TRUTHY")
} else {
    console.log("FALSY empty string")
}