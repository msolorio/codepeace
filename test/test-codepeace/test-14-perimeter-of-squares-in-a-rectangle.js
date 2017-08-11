const should = require('chai').should();

const { perimeter } = require('../../codepeace/14-perimeter-of-squares-in-a-rectangle');

describe('perimeter', function() {
  it('should return the correct perimeter of all squares of fibonacci lengths given the number passed in plus one number of squares', function() {
    const normalCases = [
      {input: 5, expect: 80},
      {input: 7, expect: 216},
      {input: 20, expect: 114624},
      {input: 30, expect: 14098308}
    ];

    normalCases.forEach(function(testCase) {
      perimeter(testCase.input).should.equal(testCase.expect);
    });
  });
});