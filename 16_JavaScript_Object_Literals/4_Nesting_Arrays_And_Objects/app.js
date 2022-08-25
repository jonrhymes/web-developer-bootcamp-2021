// array and nested objects
const comments = [
    {
        username: 'Tammy',
        text: 'lolololol',
        votes: 9
    },
    {
        username: 'Fishy',
        text: 'glub glub',
        votes: 1258
    }
];

// to access, get the index and chain on the key
console.log(comments[1].text);
console.log(comments[1]['votes']);