const chai = require('chai');

const should = chai.should();

const { uniqueInOrder } = require('../5-unique-in-order');

describe('uniqueInOrder', function() {

  it('should return an array of unique values preserving character order', function() {
    
    const normalCase = [
      {input: 'AAAABBBCCDAABBB', expected: ['A', 'B', 'C', 'D', 'A', 'B']},
      {input: 'ABBCcAD', expected: ['A', 'B', 'C', 'c', 'A', 'D']},
      {input: [1,2,2,3,3], expected: [1,2,3]}
    ];

    normalCase.forEach(function(testCase) {
      uniqueInOrder(testCase.input).should.deep.equal(testCase.expected);
    });

  });
});
