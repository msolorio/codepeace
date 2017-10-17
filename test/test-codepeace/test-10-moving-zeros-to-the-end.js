const should = require('chai').should();

const { moveZeros } = require('../../codepeace/10-moving-zeros-to-the-end.js');

describe('moveZeros', function() {
  it('should return the original array with zeros moved to the end and with the order of other numbers preserved', function() {

    const normalCases = [
      {input: [false,1,0,1,2,0,1,3,"a"], expected: [false,1,1,2,1,3,"a",0,0]},
      {input: [0,0,1,0], expected: [1,0,0,0]},
      {input: [null,0,undefined], expected: [null,undefined,0]}
    ];

    normalCases.forEach((testCase) => {
      moveZeros(testCase.input).should.deep.equal(testCase.expected);
    });
  });
});
