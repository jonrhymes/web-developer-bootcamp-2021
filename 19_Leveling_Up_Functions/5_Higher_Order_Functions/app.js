// higher order functions
// functions that operate on/with other functions
// they can:
    // accept other functions as arguments
    // return a function

    function callTwice(func) {
        func();
        func();
    }

    function callTenTimes(f) {
        for(let i = 0; i < 10; i++) {
            f();
        }
    }

    function rollDie() {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(roll);
    }
    // callTwice(rollDie()); 
    // this is WRONG! it will execute immediately and return a number which then cannot be passed and executed
    
    callTwice(rollDie);
    callTenTimes(rollDie);