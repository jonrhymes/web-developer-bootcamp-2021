function staircase(n) {

    // 0 6           
    // 1 5           #
    // 2 4          ##
    // 3 3         ###
    // 4 2        ####
    // 5 1       #####
    // 6 0      ######

    for(let i = 1; i < n + 1; i++) { // change the for loop so it starts at 1 and ends at 6
        let spaces = n - i;
        // console.log(spaces, i);
        // use repeat to multiply strings
        console.log(' '.repeat(spaces) + '#'.repeat(i));
    }
}

staircase(6);