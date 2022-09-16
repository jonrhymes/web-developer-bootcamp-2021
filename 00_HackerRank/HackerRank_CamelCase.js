/*
There is a sequence of words in CamelCase as a string of letters, s, having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given s, determine the number of words in s.

Example
s = oneTwoThree

There are 3 words in the string: 'one', 'Two', 'Three'.

String 5 contains five words:

1. save
2. Changes
3. In
4. The
5. Editor
*/

function camelcase(s) {
    // Write your code here
    let count = 1;
    const regex = /[A-Z]/g;
    for(let char of s) {
        if(regex.test(char)) {
            count++;
        }
    }
    return count;

}