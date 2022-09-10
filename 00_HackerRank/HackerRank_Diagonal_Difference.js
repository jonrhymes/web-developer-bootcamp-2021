// doesn't work!!

function flatDeep(arr, d = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return d > 0
        ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
        : arr.slice();
}

arr = flatDeep(arr, Infinity);
//     1.     2.      0.      2.      1. 
// idx 0.  1  2.  3   4.  5.  6.   7. 8
// [  11,  2, 4,  4,  5,  6, 10,  8, -12]
// diag 1 = 4
// diag 2 = 19

let newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

let diag1 = 0;
let diag2 = 0;
let middle = 0;
for(let i = 0; i < newArr.length; i++) {
    if(i % 2 == 0) {
        diag1 = diag1 + newArr[i];
    } else {
        let valueLength = (newArr.length - 1) / 2;
        console.log("valueLength", valueLength);
        middle = newArr[valueLength];
        diag2 = diag2 + newArr[i];
    }
}
console.log("diag1", diag1);
diag2 = diag2 + middle; 
console.log("diag2", diag2);

let answer = Math.abs(diag1 - diag2);
return answer;