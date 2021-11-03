// nesting
// nest conditionals inside conditionals

// let password = "cat dog";
// if (password.length >= 6) {
//     if (password.indexOf(' ') !== -1) {
//         console.log("Password cannot include spaces");
//     }
//     else {
//         console.log("Valid password");
//     }
// } else {
//     console.log("Password too short!");
// }

const password = prompt("Please enter a new password");

// password must be 6+ characters
// if (password.length >= 6) {
//     console.log("Long enough password")
// } else {
//     console.log("Password too short! Must be 6+ characters")
// }

// password cannot include spaces
// we want the indexOf(' ') to be -1, to not include a space

// if(password.indexOf(' ') === -1) {
//     console.log("Password is valid")
// } else {
//     console.log("Password cannot contain spaces")
// }


// nested
if (password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid password");
    } else {
        console.log("Password cannot contain spaces");
    }
} else {
    console.log("Password too short! Must be 6+ characters");
}