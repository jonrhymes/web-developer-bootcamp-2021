/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example
arr = [1,1,0,-1,-1]

There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:

0.400000
0.400000
0.200000
*/

function plusMinus(arr) {
    // Write your code here
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    let totalCount = arr.length;
    for(let num of arr) {
        if(Math.sign(num) === 1) {
            // console.log("Pos", num);
            posCount++;
            // console.log("PosCount", posCount);
        } else if(Math.sign(num) === -1) {
            // console.log("Neg", num)
            negCount++;
        } else {
            // console.log("Zed", num);
            zeroCount++;
        }
    }
    let positive = (posCount / totalCount).toFixed(6);
    let negative = (negCount / totalCount).toFixed(6);
    let zero = (zeroCount / totalCount).toFixed(6);
    console.log(positive)
    console.log(negative)
    console.log(zero); 
}