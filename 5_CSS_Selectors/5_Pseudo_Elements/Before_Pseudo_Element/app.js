var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
}, false);