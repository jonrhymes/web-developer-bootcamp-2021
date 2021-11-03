// switch
// a control-flow statement that can replace multiple if statements
// - needs break;

// using if/else if statements
// const day = 2;

// if (day === 1) {
//     console.log("MONDAY")
// } else if (day === 2) {
//     console.log("TUESDAY")
// } else if (day === 3) {
//     console.log("WEDNESDAY")
// } else if (day === 4) {
//     console.log("THURSDAY")
// } else if (day === 5) {
//     console.log("FRIDAY")
// } else if (day === 6) {
//     console.log("SATURDAY")
// } else if (day === 7) {
//     console.log("SUNDAY")
// }

// using switch statement
const day = 3;

switch(day) {
    case 1: 
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    // same case outcomes - stacked
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DON'T KNOW THAT");
}

// default is a catch-all

