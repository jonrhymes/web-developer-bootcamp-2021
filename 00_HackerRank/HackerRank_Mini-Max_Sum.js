/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

Example
arr = [1,3,5,7,9]

The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24. The function prints 16 24
*/

function miniMaxSum(arr) {
    let sorted = arr.sort((a, b) => a - b);
    // console.log("sorted: ", sorted);
    
    let sum = 0;
    let array = [];
    
    for(let i = 0; i < sorted.length; i++) {
        sum += sorted[i];
    }
    
    for(let j = 0; j < sorted.length; j++) {
        array.push(sum - sorted[j]);
    }
    
    let min = array[array.length - 1];
    let max = array[0];
    
    // console.log("SUM: ", sum);
    // console.log("ARRAY: ", array);
    
    // console.log("MIN: ", min);
    // console.log("MAX: ", max);

    console.log(`${min} ${max}`);
    // return `${min} ${max}`;
}