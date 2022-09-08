// return
// built-in methods return values when we call them and we can store those valies
const yell = "hey you over there".toUpperCase();
yell; // "HEY YOU OVER THERE"
const idx = ['a','b','c'].indexOf('c');
idx; // 2


// return statement ends function execution AND specifies the value to be returned by that function

function add(x, y) {
    return x + y;
}

let sum = add(7,9);
console.log(sum);

// add return in conditional block
function addMore(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}

console.log(addMore(4,9));
console.log(addMore(4,'a'));

// return only returns a SINGLE VALUE


/*
Last Element Exercise
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
*/ 
function lastElement(arr) {
    if(arr.length == 0) {
      return null;  
    }
    return arr[arr.length - 1];
}

console.log(lastElement([1,5,7,14,36]));

/*
Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
Hints:

Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.
*/

function capitalize(str) {
    for(let i = 0; i < str.length; i++) {
        let firstEl = str[0].toUpperCase()
        let newString = str.slice(1);
        let result = firstEl + newString;
        console.log(result)
        return result;
    }
}

capitalize('pamplemousse');

/*
Sum Array Exercise
Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
Hints:

You'll need a variable to keep track of the total.  It should start out as zero.


Loop over the array and for each element, add it to the total variable.

After you have added every number to total, return total.
*/

function sumArray(arr) {
    let sum = 0;
    for(let val of arr) {
        sum += val;
    }
    console.log(sum);
    return sum;
}

sumArray([100,203,492,14,83]);

/*
Days Of The Week Exercise
Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
*/

const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

function returnDay(day) {
    if(day <= 0 || day > 7) {
        console.log(null);
        return null;
    }
    let daysOfWeek = Object.values(days);
    console.log(daysOfWeek[day - 1]);
}

returnDay(8);