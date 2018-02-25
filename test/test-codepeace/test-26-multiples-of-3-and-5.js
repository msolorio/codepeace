'use strict';

const chai = require('chai');
const expect = chai.expect;

const threesAndFives = require('../../codepeace/26-multiples-of-3-and-5');

describe('cp26 - threesAndFives', function() {
  it('should return an error if input is not a number', function() {
    expect(threesAndFives('asdf')).to.be.an('error');
  });

  it('should return an error if input is a number less than zero', function() {
    expect(threesAndFives(-1)).to.be.an('error');
  });

  it('should return the correct totals array given a valid input', function() {
    const testCases = [
      {
        input: 1,
        expectedOutput: [0, 0, 0]
      },
      {
        input: 15,
        expectedOutput: [4, 2, 0]
      },
      {
        input: 87,
        expectedOutput: [23, 12, 5]
      },
      {
        input: 444,
        expectedOutput: [118, 59, 29]
      }
    ];

    testCases.forEach((testCase) => {
      expect(threesAndFives(testCase.input)).to.deep.equal(testCase.expectedOutput);
    });
  });
});
