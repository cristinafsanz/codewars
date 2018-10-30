const sortAlphabet = require('./sortAlphabet.js');
const filterDuplicated = require('./filterDuplicated.js');

function longest(s1, s2) {
  return sortAlphabet(filterDuplicated(s1 + s2));
}

module.exports = longest;