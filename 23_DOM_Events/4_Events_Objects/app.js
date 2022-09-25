document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log('keydown')
})
input.addEventListener('keyup', function() {
    console.log('keyup')
})
