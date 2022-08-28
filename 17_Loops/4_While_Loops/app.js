// while loops continue running as long as the test condition is true

let count = 0;
while(count < 10) {
    count++;
    console.log(count);
}

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code");

while(guess !== SECRET) {
    guess = prompt("enter the secret code");
}

alert("CONGRATS YOU GOT THE SECRET PASSWORD!!");