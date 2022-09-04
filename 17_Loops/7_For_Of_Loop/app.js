const subreddits = ['cringe', 'books','chickens','funny','pics','soccer'];

// traditional method
// for(let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

/* for(variable of iterable) {
    statement
} */

// for... of - iterating over arrays and strings
// nice, compact and easy to read syntax
// make up a custom variable 
for(let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}

// nested loop: Before
const seatingChart = [
    ['Jon', 'Johnathan', 'Matthew', 'Rob'],
    ['Eman', 'Nick', 'Daniel'],
    ['Grayson', 'Josh', 'Magnus', 'Kyle']
]

/* for(let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
} */

// nested loop with For... Of Loop
for(let row of seatingChart) {
    for(let student of row) {
        console.log(student);
    }
}

// iterating over strings
for(let char of "hello dog park") {
    console.log(char);
}

// print out the square value of each
const numbers = [1,2,3,4,5,6,7,8,9];
for(let num of numbers) {
    console.log(num*num);
}