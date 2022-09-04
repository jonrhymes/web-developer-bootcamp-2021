// cannot use for...of loop to iterate over objects, even though arrays and strings are technically objects

// use For... In - but it will only return the KEY, not the VALUE

const testScores = {
    keenan: 90,
    daemon: 67,
    kimdeal: 89,
    shaq: 91,
    marnie: 72,
    dell: 88,
    nadir: 83,
    elvis: 97,
    gad: 65,
    jay: 85,
    dan: 96,
    christine: 66
}

for(let person in testScores) {
    console.log(person);
}

// to get the Key and Value
for(let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// another method: Object.keys - returns a new Array
let keys = Object.keys(testScores);
console.log(keys);

/* [
  'keenan',  'daemon',
  'kimdeal', 'shaq',
  'marnie',  'dell',
  'nadir',   'elvis',
  'gad',     'jay',
  'dan',     'christine'
] */

let values = Object.values(testScores);
console.log(values);
/* [
  90, 67, 89, 91, 72,
  88, 83, 97, 65, 85,
  96, 66
] */

let entries = Object.entries(testScores);
console.log(entries);
// returns a nested array of key-value pairs
/* 
[
  [ 'keenan', 90 ],
  [ 'daemon', 67 ],
  [ 'kimdeal', 89 ],
  [ 'shaq', 91 ],
  [ 'marnie', 72 ],
  [ 'dell', 88 ],
  [ 'nadir', 83 ],
  [ 'elvis', 97 ],
  [ 'gad', 65 ],
  [ 'jay', 85 ],
  [ 'dan', 96 ],
  [ 'christine', 66 ]
]
*/


// to sum the scores & find the average
// but objects have NO LENGTH!

// let total = 0;
// for(let score of Object.values(testScores)) {
//     total += score;
// }

// console.log(total);

// to find average take the length of Object.values(testScores)
let total = 0;
let scores = Object.values(testScores);
for(let score of scores) {
    total += score;
}

console.log(total / scores.length);