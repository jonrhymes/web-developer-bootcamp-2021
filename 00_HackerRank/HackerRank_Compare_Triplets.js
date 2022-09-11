/*
Sample Input
5 6 7
3 6 10

Sample Output 
1 1

Explanation

In this example:

Now, let's compare each individual score:
a[0] > b[0], so Alice receives 1 point.
a[1] = b[1], so nobody receives a point.
a[2] < b[2], so Bob receives 1 point.
Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1,1].
*/

function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
    let result = [];
    for(let i = 0; i < a.length; i++) {
        // console.log("a vals", a[i]);
        // console.log("b vals", b[i]);
        // console.log("equal")
        if(a[i] > b[i]) aScore++;
        // console.log("a greater than b")
        if(a[i] < b[i]) bScore++;
        // console.log("b greater than a")
   
    }
    // console.log("a score", aScore)
    // console.log("b score", bScore)
    result.push(aScore, bScore);
    // console.log(result);
    return result;
}