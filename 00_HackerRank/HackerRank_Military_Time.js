/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

*/

function timeConversion(s) {
    // Write your code here
    function slicedFirstTwo(str) {
        return str.slice(0,2);
    }
    
    function removeAMPM(strings) {
        return strings.slice(0,-2);    
    } 
    
    if(s.includes('A', 8)) {
        // console.log("INCLUDES A");
        const firstTwo = slicedFirstTwo(s);
        // console.log("FIRST TWO", firstTwo);
        // console.log("S AFTER", s);
        if(firstTwo === '12') {
            // console.log("MIDNIGHT");
            let converted = '00' + s.slice(2);
            // console.log("CONVERTED", converted);
            let military = removeAMPM(converted);
            // console.log("MILITARY", military);
            return military;
        } else {
            let military = removeAMPM(s);
            // console.log("MILITARY", military);
            return military;
        }
    }
    else if(s.includes('P', 8)) {
        // console.log("INCLUDES P");
        let firstTwo = slicedFirstTwo(s);
        if(firstTwo === '12') {
            let military = removeAMPM(s);
            return military;
        } else {        
            let addTwelve = (parseInt(firstTwo) + 12).toString();
            // console.log("Add twelve", addTwelve);
            let converted = addTwelve + s.slice(2);
            // console.log("CONVERTED", converted);
            let military = removeAMPM(converted);
            // console.log("MILITARY", military);
            return military;
        }
    }
}