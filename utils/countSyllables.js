const Rita = require('rita');

const countSyllables = message => {
    let syllables = Rita.getSyllables(message);
    syllables = syllables.replace(/ /g, '/');
    
    let res = syllables.split('/');
    return res.length;
};

module.exports = countSyllables;
