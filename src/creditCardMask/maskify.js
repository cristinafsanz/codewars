module.exports = function(cc) {
  let result = cc;
  const notMaskedLength = 4;

  if (cc.length > notMaskedLength) {
    const numberMasked = cc.length - notMaskedLength;

    const masked = "#".repeat(numberMasked);
    const notMasked = cc.substr(numberMasked);

    result = masked + notMasked;
  }
  return result;
};