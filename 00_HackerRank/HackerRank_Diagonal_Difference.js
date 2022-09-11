// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is \15-17\ = 2.

function diagonalDifference(arr) {
    let diag1 = 0;
    let diag2 = 0;
    
    // loop through outside array
    for(let i = 0; i < arr.length; i++){
        // loop through inner array
        for(let j = 0; j < arr.length; j++){      
            console.log("outer", i);  
            console.log("inner", j);  
            if(i == j) {
                console.log("diag1: ", arr[i][j]);
                diag1 += arr[i][j];
            }
            if(i + j == arr.length - 1){
                console.log("diag2: ", arr[i][j]);
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}

let arr = [
    [11, 2, 4], //  outer: 0    inner: 0
    [4, 5, 6], //   outer: 1    inner: 1
    [10, 8, -12] // outer: 2    inner: 2
];

console.log(diagonalDifference(arr));
// //     1.     2.      0.      2.      1. 
// // idx 0.  1  2.  3   4.  5.  6.   7. 8
// // [  11,  2, 4,  4,  5,  6, 10,  8, -12]
// // diag 1 = 4
// // diag 2 = 19

// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     if(i % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// let diag1 = 0;
// let diag2 = 0;
// let middle = 0;
// for(let i = 0; i < newArr.length; i++) {
//     if(i % 2 == 0) {
//         diag1 = diag1 + newArr[i];
//     } else {
//         let valueLength = (newArr.length - 1) / 2;
//         console.log("valueLength", valueLength);
//         middle = newArr[valueLength];
//         diag2 = diag2 + newArr[i];
//     }
// }
// console.log("diag1", diag1);
// diag2 = diag2 + middle; 
// console.log("diag2", diag2);

// let answer = Math.abs(diag1 - diag2);
// return answer;