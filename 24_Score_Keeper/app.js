const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

// refactored
function updateScores(player, opponent){
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-danger');
            opponent.display.classList.add('has-text-success');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})

// p1Button.addEventListener('click', function(){
//     if(!isGameOver) {
//         p1Score += 1;
//         if(p1Score === winningScore) {
//             isGameOver = true;
//             p2Display.classList.add('has-text-danger');
//             p1Display.classList.add('has-text-success');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;

//     }
// })

// p2Button.addEventListener('click', function(){
//     if(!isGameOver) {
//         p2Score += 1;
//         if(p2Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('has-text-danger');
//             p2Display.classList.add('has-text-success');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;

//     }
// })

resetBtn.addEventListener('click', reset)

// moved from resetBtn to its own function so it can get called when the winning score changes
function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = p1Score;
    // p2.display.textContent = p2Score;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}


// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = p1Score;
//     p2Display.textContent = p2Score;
//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value); // parseInt takes a string and pulls an integer out of it
    reset();
})