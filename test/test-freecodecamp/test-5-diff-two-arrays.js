'use strict';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const diffArrays = require('../../freecodecamp/5-diff-two-arrays');

describe('fcc5 - diffArrays', function() {
  it('should return an array', function() {
    expect(diffArrays(['a', 'b', 'c'], ['a', 'd', 'e'])).to.be.an('array');
  });

  it('should return correct output if there are no unique items', function() {
    expect(diffArrays(['a', 'b', 'c'], ['a', 'b', 'c'])).to.deep.equal([]);
  });

  it('should return correct output if all items are unique', function() {
    expect(diffArrays(['a', 'b', 'c'], ['d', 'e', 'f'])).to.deep.equal(
      ['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('should return error if two params are not provided', function() {
    expect(diffArrays(['a', 'b', 'c'])).to.be.an('error');
    expect(diffArrays(['a', 'b', 'c']).message).to.equal('two params must be provided');
  });

  it('should return error if both params are not arrays', function() {
    expect(diffArrays(['a', 'b', 'c'], 'asdf')).to.be.an('error');
    expect(diffArrays(['a', 'b', 'c'], 'asdf').message).to.equal('both params must be arrays');
  });

  it('should return an array of the unique values from each provided array', function() {
    const testCases = [
      {input: [[1, 2, 3], [1, 2, 4]], output: [3, 4]},
      {input: [[1, 1, 1], [1, 2, 2, 2]], output: [2, 2, 2]}
    ];

    testCases.forEach((testCase) => {
      expect(diffArrays(...testCase.input)).to.deep.equal(testCase.output);
    });

  });
});
