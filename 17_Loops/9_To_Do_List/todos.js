// while results are not equal to quit, keep looping
// use conditionals inside loop
// use prompt
// use arrays for storage of prompts
// begin with empty array

let todos = [];
let input = ''; 
// let input = prompt('What woud you like to do?');;

while(input !== 'quit' && input !== 'q') {

    input = prompt('What woud you like to do?');
    
    if(input === 'new') {
        // Enter new todo
        input = prompt('Enter a new todo');
        todos.push(input);
        console.log(`${input} added to the list!`);
    }
    // if list, iterate over todos
    else if(input === 'list') {
        console.log('*********');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********');
    }
    // splice
    else if(input === 'delete') {
        input = parseInt(prompt('Enter the number you want to delete'));
        const deleted = todos.splice(input.indexOf(), 1);
        console.log(`Removed ${deleted[0]}`);
        // from Udemy:
        // const index = parseInt(prompt('Enter the number you want to delete'));
        // if(!Number.isNaN(index)) {
            // const deleted = todos.splice(index, 1);
            // console.log(`Ok, deleted ${deleted[0]}`);
        // } else {
            // console.log('Unknown index');
        // }

    }
}

console.log("OK! YOU QUIT THE APP!");
