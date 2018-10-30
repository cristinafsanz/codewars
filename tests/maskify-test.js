const chai = require('chai');
const maskify = require('../src/creditCardMask/maskify');

const expect = chai.expect;

describe('Maskify', function () {
  it("should work for some examples", function() {
    const input = ['4556364607935616', '1', '11111', '3434'];
    const output = ['############5616', '1', '#1111', '3434'];

    input.forEach((item, index) => {
      expect(maskify(item)).to.be.deep.equal(output[index]);
    });
  });
});