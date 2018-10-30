function longestInOneFile(s1, s2) {
  return sortAlphabet(filterDuplicated(s1 + s2));
}

function sortAlphabet(text) {
  return text.split('').sort().join('');
}

function filterDuplicated(text) {
  return Array.from(new Set(text.split(''))).join('');
}

module.exports = longestInOneFile;