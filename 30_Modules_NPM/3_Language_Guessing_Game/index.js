// const langua = require('langs');
import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';
// import pkg from './node_modules/langs/index.js';
// const { langs } = pkg; 
const input = process.argv[2];

// console.log(langs);

// console.log(franc('Alle menslike wesens word vry'));

// const langCode = franc('Alle menslike wesens word vry');

const langCode = franc(input);

// console.log(language);
/*
{
  '1': 'af',
  '2': 'afr',
  '3': 'afr',
  name: 'Afrikaans',
  local: 'Afrikaans',
  '2T': 'afr',
  '2B': 'afr'
}
*/
if(langCode === "und"){
    console.log("Sorry. Couldn't find that language".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}