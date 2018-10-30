const chai = require('chai');
const disemvowel = require('../src/disemvowelTrolls/disemvowel.js');

const expect = chai.expect;

describe('Disemvowel', function () {
  it("Should delete vowels", function() {
    const input = [
      'This website is for losers LOL!',
      'Another text to test',
      'Yet another one',
    ];
    const output = [
      'Ths wbst s fr lsrs LL!',
      'nthr txt t tst',
      'Yt nthr n',
    ];

    input.forEach((item, index) => {
      const result = disemvowel(item);
      expect(result).to.be.deep.equal(output[index]);
    });
  });
});