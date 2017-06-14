const Rita = require('rita');
const RiString = Rita.RiString;

console.log(Rita.VERSION);
console.log(Rita.randomWord());
console.log(Rita.rhymes('Constitution'));

var rs = new RiString('To be or not to be that is the question');
rs.analyze();
var feat = rs.features();
console.log(feat.syllables.split(/\//).length);