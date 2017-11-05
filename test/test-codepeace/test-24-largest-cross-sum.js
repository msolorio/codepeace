'use strict';

const chai = require('chai');
const expect = chai.expect;

const largestCrossSum = require('../../codepeace/24-largest-cross-sum');

describe('cp24 - largestCrossSum', function() {
  it('should return a number', function() {
    const array = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ];

    expect(largestCrossSum(array)).to.be.a('number');
  });

  it('should return an error if input is not an array', function() {
    const testCases = [
      null,
      undefined,
      'asdf',
      true,
      false,
      {prop: 'val'}
    ];

    testCases.forEach(function(testCase) {
      expect(largestCrossSum(testCase)).to.be.an('error');
      expect(largestCrossSum(testCase).message).to.equal('input must be an array');
    });
  });

  it('should return an error if input array does not have exactly 9 items', function() {
    const arrayShort = [
      1, 2, 3,
      4, 5, 6,
      7, 8
    ];

    const arrayLong = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
      10
    ];

    expect(largestCrossSum(arrayShort)).to.be.an('error');
    expect(largestCrossSum(arrayShort).message).to.equal('input array must have exactly 9 items');
    expect(largestCrossSum(arrayLong)).to.be.an('error');
    expect(largestCrossSum(arrayLong).message).to.equal('input array must have exactly 9 items');
  });

  it('should return an error if input array does not contain only numbers', function() {
    const array = [
      1, 2, 3,
      4, 5, null,
      6, 7, 'asf'
    ];

    expect(largestCrossSum(array)).to.be.an('error');
    expect(largestCrossSum(array).message).to.equal('input array must contain only numbers');
  });

  it('should return correct sum of largest column and largest row given 3x3 grid', function() {
    const testCases = [
      {input: [
        1, 1, 1,
        2, 2, 2,
        3, 3, 3
      ], output: 15},

      {input: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ], output: 0},

      {input: [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1
      ], output: 6}
    ];

    testCases.forEach(function(testCase) {
      expect(largestCrossSum(testCase.input)).to.equal(testCase.output);
    });
  });
});
