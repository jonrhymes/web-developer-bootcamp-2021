// arguments are what are passed into functions in parentheses (parameter)

function greet() {
    console.log("HI!");
}

// parameter is the placeholder value passed into argument
function greet(firstName) {
    console.log(`Hi, ${firstName}!`);
}
greet('Alison');


/*
Rant Exercise
Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS
*/

function rant(message) {
    let uppercased = message.toUpperCase();
    console.log(uppercased);
    console.log(uppercased);
    console.log(uppercased);
}


// multiple arguments
function greetNames(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName}!`);
}
greetNames('Alison', 'Thornsberry');

function greetNames2(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}
greetNames2('Alison', 'Thornsberry');


// you CAN ignore arguments, like leave off numTimes as long as it doesn't cause an error
function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('$', 5);
repeat('I LOVE ARLO! ', 3);


// snake eyes
/* 
Multiple Args Exercise
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.
*/

function isSnakeEyes(x, y){
    if(x === 1 && y === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}