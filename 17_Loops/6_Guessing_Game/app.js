// parseInt on what you're prompting user to convert strings to numbers
let maximum = parseInt(prompt("Enter the maximum number to guess"));

// problem: if user enters not a number (NaN)
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

// guess is a string
// targetNum is a number
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    // add a quit method so remove parseInt from each subsequent guess and just compare it during the while loop
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}

if(guess === 'q') {
    alert(`OK, YOU QUIT!`);
} else {
    alert(`YOU GOT IT! It took you ${attempts} guesses`);
}