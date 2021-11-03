// not
// ! expression returns true if expression is false
// ! = bang

// !null = true
// !(0 == 0) = false
// !(3 <= 4) = false

// const firstName = prompt("Enter your first name");
// if(!firstName) {
//     firstName = prompt("Try again");
// }

const age = 45;

if(!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR");
}