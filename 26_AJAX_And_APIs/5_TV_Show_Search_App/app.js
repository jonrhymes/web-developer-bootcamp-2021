const form = document.querySelector('#searchForm')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log("SUBMITTED!")
    // console.dir(form)
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query;
})