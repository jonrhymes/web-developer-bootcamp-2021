function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log('Congrats! I am a good function. You win a million dollars');
        }
    } else {
        return function() {
            alert('You have been infected with a computer virus');
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
        }
    }
}

const mystery = makeMysteryFunc();
// mystery();


// function that generates a function based on some input

// return a function to determine whether a number is between min and max
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(6)); // true
console.log(isChild(19)); // false

const isAdult = makeBetweenFunc(19, 64);
console.log(isAdult(37)); // true
console.log(isAdult(88)); // false

const isSenior = makeBetweenFunc(65, 110);
console.log(isSenior(6)); // false
console.log(isSenior(69)); // true


// example
function isBetween(num) {
    return num >= 50 && num <= 100;
}