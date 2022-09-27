document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    // console.log(e.key); // Shift, Meta
    // console.log(e.code); // ShiftLeft, MetaRight
    // console.log('keydown')
})
input.addEventListener('keyup', function(e) {
    switch(e.code){
        case 'ArrowUp':
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log('DOWN')
            break;
        case 'ArrowLeft':
            console.log('LEFT')
            break;
        case 'ArrowRight':
            console.log('RIGHT')
            break;
        default:
            console.log('IGNORED')
        
    }
})
