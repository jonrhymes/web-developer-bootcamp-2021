// else
// if nothing else was true, do this...


// let rating = -99;
// if (rating === 3) {
//     console.log("You are a superstar");
// } else if (rating === 2) {
//     console.log("Meets expectations");
// } else if (rating === 1) {
//     console.log("Needs improvement");
// } else {
//     console.log("invalid rating!");
// }


// days of the week

// if (dayOfWeek === 'Monday') {
//     console.log("UGHH I HATE MONDAYS!");
// } else if (dayOfWeek === 'Tuesday') {
//     console.log("MEH, IT'S TUESDAY");
// } else if (dayOfWeek === 'Wednesday') {
//     console.log("MEH");
// } else if (dayOfWeek === 'Thursday') {
//     console.log("MEH");
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === 'Friday') {
//     console.log("FRIDAYS ARE MOVIE NIGHTS!");
// }


// refactored as:

// const dayOfWeek = prompt("Enter a day").toLowerCase();
// to eliminate user casing, you can down- or upper-case everything

// if (dayOfWeek === 'monday') {
//     console.log("UGHH I HATE MONDAYS!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE MOVIE NIGHTS!");
// } else {
//     console.log("MEH")
// }


let random = Math.random();

if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5")
} else {
    console.log("YOUR NUMBER IS GREATER THAN (OR EQUAL TO) 0.5")
}
console.log(random)