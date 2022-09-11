
// try/catch
// used for error handling
// ensures code can execute if error occurs
// must have both try and catch for either to work

try {
    hello.toUppercase
} catch {
    console.log("ERROR!!!");
}

console.log("After try/catch, code still runs")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time");
    }
}

yell("HEY")
// yell(1234) // causes an error if number is passed