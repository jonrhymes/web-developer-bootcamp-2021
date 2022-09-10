// scope
// Variable 'visibility'
// The location where a bariable is defined dictates where we have access to that variable

let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}

console.log(totalEggs);
collectEggs();
console.log(totalEggs);

// can access a variable inside the scope
let bird = 'Scarlet Macaw';
function birdWatch() {
    // if a closer bird is found in the scope, it'll get rewritten
    // bird is scoped to birdWatch function
    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch();
console.log(bird);