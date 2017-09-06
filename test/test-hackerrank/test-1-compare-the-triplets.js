'use strict';

const chai = require('chai');
const expect = chai.expect;

const getPoints = require('../../hackerrank/1-compare-the-triplets');

describe('getPoints', function() {

  it('should return an error if all input values are not of type number', function() {
    expect(getPoints(1, 2, '3', 4, 5, 6)).to.be.an('error');
  });

  it('should return an error if 6 arguments are not supplied', function() {
    expect(getPoints(1, 2, 3, 4)).to.be.an('error');
  });

  it('should return an array', function() {
    expect(getPoints(1, 1, 1, 1, 1, 1)).to.be.an('array');
  });

  it('should return an array of length 2', function() {
    expect(getPoints(2, 1, 3, 4, 5, 6).length).to.equal(2);
  });

  it('should return correct points based on Alice and Bob\'s scores', function() {
    const cases = [
      {
        input: [1, 1, 1, 2, 2, 2],
        expectedOutput: [0, 3]
      },
      {
        input: [3, 3, 3, 2, 2, 2],
        expectedOutput: [3, 0]
      },
      {
        input: [0, 0, 3, 2, 2, 2],
        expectedOutput: [1, 2]
      }
    ];

    cases.forEach(function(testCase) {
      expect(getPoints(...testCase.input)).to.deep.equal(testCase.expectedOutput);
    });
  });
});
