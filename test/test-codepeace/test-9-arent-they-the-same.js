const chai = require('chai');

const should = chai.should();

const { comp } = require('../../codepeace/9-arent-they-the-same');

describe('comp', function() {

  it('return false if array1 or array2 are null or undefineds', function() {
    comp([1, 2, 3], null).should.equal(false);
  });

  it('returns false if the array1 and array2 are not the same size', function() {
    comp([1, 2, 3], [1, 4]).should.equal(false);
  });

  it('should return true if all elements in array2 are the elements in array1 squared', function() {
    const normalCases = [
      {array1: [1, 2, 3, 4, 5], array2: [1, 4, 9, 16, 25]},
      {array1: [1, 2, 3, 4, 5], array2: [25, 1, 4, 9, 16]},
    ];

    normalCases.forEach(function(testCase) {
      comp(testCase.array1, testCase.array2).should.equal(true);
    });
  });

  it('should return false if all elements in array2 are not the elements in array1 squared', function() {
    const normalCases = [
      {array1: [1, 2, 3, 4, 5], array2: [1, 4, 10, 16, 25]},
      {array1: [1, 2, 3, 4, 5], array2: [1, 4, 9, 169, 25]},
      {array1: [1, 2, 3, 4, 5], array2: [1, 1, 1, 1, 1]},
    ];

    normalCases.forEach(function(testCase) {
      comp(testCase.array1, testCase.array2).should.equal(false);
    });
  });
});
