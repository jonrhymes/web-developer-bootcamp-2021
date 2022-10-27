const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    // console.log("SUBMITTED!")
    // console.dir(form)
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value; // extract search term from form
    const config = { params: {q: searchTerm} } // add params as query string object 
    try {
        // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        // refactored to pass in params
        
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        
        // console.log(res.data[0].show.image.medium)
        // move image making to its own function
        // const img = document.createElement('IMG');
        // img.src = res.data[0].show.image.medium;
        // document.body.append(img);
        makeImages(res.data);
        form.elements.query.value = "";
    } catch (e) {
        console.log("ERROR", e);
    }
})

// expects the array of images to loop over
const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

        // img.src = result.show.image.medium; // got an error that this <= was null. some shows didn't have medium images
    }
}