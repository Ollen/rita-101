const Rita = require('rita');
const RiString = require('rita').RiString;

let w1 = new RiString('What rhymes with the word apple?');

console.log(w1.features());
console.log(Rita.tokenize('Hello, I\'m the captain now'));
