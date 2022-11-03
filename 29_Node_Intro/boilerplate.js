const fs = require('fs');
// console.log(fs);

const folderName = process.argv[2] || 'Project'; // node(0) boilerplate.js(1) Project1(2)

// asynchronous version:
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });

// synchronous version:
// fs.mkdirSync('Cats');

// console.log('After mkdir!')

const data = 'Created!';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, data);
    fs.writeFileSync(`${folderName}/app.js`, data);
    fs.writeFileSync(`${folderName}/styles.css`, data);
} catch(e) {
    console.log('Something went wrong', e)
}
