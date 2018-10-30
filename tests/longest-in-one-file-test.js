const chai = require('chai');
const longest = require('../src/twoToOne/longest-in-one-file.js');

const expect = chai.expect;

describe('Longest', function () {
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