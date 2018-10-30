const chai = require('chai');
const filterDuplicated = require('../src/twoToOne/filterDuplicated.js');
const sortAlphabet = require('../src/twoToOne/sortAlphabet.js');
const longest = require('../src/twoToOne/longest.js');

const expect = chai.expect;

describe('Longest', function () {
  it("Should filter duplicated", function() {
    const input = [
      'ddddsefsege',
    ];
    const output = [
      'dsefg',
    ];

    input.forEach((item, index) => {
      const result = filterDuplicated(item);
      expect(result).to.be.deep.equal(output[index]);
    });
  });

  it("Should sort", function() {
    const input = [
      'ddddsefsege',
    ];
    const output = [
      'ddddeeefgss',
    ];

    input.forEach((item, index) => {
      const result = sortAlphabet(item);
      expect(result).to.be.deep.equal(output[index]);
    });
  });

  it("Should sort and return the longest", function() {
    const input = [
      ['xyaabbbccccdefww', 'xxxxyyyyabklmopq'],
      ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'],
      ['aretheyhere', 'yestheyarehere'],
      ['loopingisfunbutdangerous', 'lessdangerousthancoding'],
      ['inmanylanguages', 'theresapairoffunctions'],
      ['', ''],
    ];
    const output = [
      'abcdefklmopqwxy',
      'abcdefghijklmnopqrstuvwxyz',
      'aehrsty',
      'abcdefghilnoprstu',
      'acefghilmnoprstuy',
      '',
    ];

    input.forEach((item, index) => {
      const result = longest(item[0], item[1]);
      expect(result).to.be.deep.equal(output[index]);
    });
  });
});