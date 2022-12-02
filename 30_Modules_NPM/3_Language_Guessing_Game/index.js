// const langua = require('langs');
import {franc, francAll} from 'franc';
import langs from 'langs';
// import pkg from './node_modules/langs/index.js';
// const { langs } = pkg; 

console.log(langs);

// console.log(franc('Alle menslike wesens word vry'));

const langCode = franc('Alle menslike wesens word vry');

const language = langs.where("3", langCode);
console.log(language);