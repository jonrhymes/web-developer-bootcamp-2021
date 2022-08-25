// Infinite Loops
// Think how will this loop stop?
// Probably a logic error

const animals = [
    "Antelope",
    "Bee",
    "Cat",
    "Dog",
    "Eagle",
    "Fox",
    "Giraffe",
    "Horse",
];

// count up
for(let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log(`Reversing ${animals.length} animals`);

// count down
for(let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}