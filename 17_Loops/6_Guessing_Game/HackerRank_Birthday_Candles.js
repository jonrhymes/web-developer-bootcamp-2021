/* 
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]

The maximum height candles are  units high. There are 2 of them, so return 2.
*/

// refactor - doesn't work

function birthdayCakeCandles(candles) {
    // Write your code here
    let highest = 0;
    for(let i = 0; i < candles.length; i++) {
        highest = candles[i];
        if(candles[i + 1] > highest) {
            highest = candles[i + 1];
        } else {
            break;
        }
        return highest;
    }
    function counter(array, element) {
        let count = 0;
        for(let j = 0; j < array.length; j++) {
            if(array[j] == element) {
                count++;
            }
        }
        return count;
    }
    return counter(candles, highest);
}