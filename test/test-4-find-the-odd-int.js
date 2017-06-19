const chai = require('chai');

const should = chai.should();

const { findOdd } = require('../4-find-the-odd-int');

describe('findOdd', function() {

  const normalCase = [
    {input: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], expected: 5},
    {input: [1,1,2,-2,5,2,4,4,-1,-2,5], expected: -1},
    {input: [20,1,1,2,2,3,3,5,5,4,20,4,5], expected: 5}
  ];

  it('should return the interger occuring the odd number of times', function() {
    normalCase.forEach(function(testCase) {
      findOdd(testCase.input).should.equal(testCase.expected);
    });
  });
});
