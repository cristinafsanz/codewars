module.exports = function(text) {
  return Array.from(new Set(text.split(''))).join('');
};