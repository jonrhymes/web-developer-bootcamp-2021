// nested loops
// for every outer loop, the inner loop will have a full cycle


for(let i = 0; i <= 10; i++) {
    console.log(`i is ${i}`);
    for(let j = 1; j < 4; j++) {
        console.log(`    j is ${j}`);
    }
}

// nested loops are used to  traverse or iterate over nested arrays 

const seatingChart = [
    ['Jon', 'Johnathan', 'Matthew', 'Rob'],
    ['Eman', 'Nick', 'Daniel'],
    ['Grayson', 'Josh', 'Magnus', 'Kyle']
]

for(let i = 0; i < seatingChart.length; i++) {
    // prints each row array - not what we want
    // console.log(seatingChart[i]); 
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}