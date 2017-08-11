const chai = require('chai');

const should = chai.should();

const { getSequence } = require('../../codepeace/6-tribonacci');

describe('getSequence', function() {
  it('should return correct sequence for given input', function() {

    const normalCases = [
      {input: [[1,1,1], 10], expected: [1,1,1,3,5,9,17,31,57,105]},
      {input: [[0,0,1], 10], expected: [0,0,1,1,2,4,7,13,24,44]},
      {input: [[0,1,1],10], expected: [0,1,1,2,4,7,13,24,44,81]},
      {input: [[1,2,3],10], expected: [1,2,3,6,11,20,37,68,125,230]}
    ];

    normalCases.forEach((testCase) => {
      getSequence(testCase.input[0], testCase.input[1]).should.deep.equal(testCase.expected);
    });

  });
});
