// lexical scope
// an inner function nested inside some parent function has access to the scope or variables defined in the scope of that outer function or however many levels up

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() { // need to run function inside scope to access the following loop
        function inner() {
            for(let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`)
            }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();