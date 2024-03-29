/* 
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]

The maximum height candles are  units high. There are 2 of them, so return 2.
*/

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
    // console.log(max);
    let count = 0;
    for(let candle of candles) {
        if(candle == max) {
            count++;
        }
    }
    // console.log(count);
    return count;
}