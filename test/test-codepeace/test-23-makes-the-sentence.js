'use strict';

const chai = require('chai');
const expect = chai.expect;

const makesTheSentence = require('../../codepeace/23-makes-the-sentence');

describe('cp23 - makesTheSentence', function() {
  it('should return a boolean', function() {
    expect(makesTheSentence(['a', 'b', 'c'], 'abcd.')).to.be.a('boolean');
  });

  it('should return an error if the first argument is not an array of strings', function() {
    expect(makesTheSentence('asdf', 'asdfg')).to.be.an('error');
    expect(makesTheSentence('asdf', 'asdfg').message).to.equal('the first argument must be an array');
    expect(makesTheSentence([true, 'asf', 1234, 'asdf'], 'asdf')).to.be.an('error');
    expect(makesTheSentence([true, 'asdf', 1234], 'asdf').message).to.equal('all items in array must be strings');
  });

  it('should return an error if the second argument is not a string', function() {
    expect(makesTheSentence(['a', 'b', 'c'], 1234)).to.be.an('error');
    expect(makesTheSentence(['a', 'b', 'c'], 1234).message).to.equal('second argument must be a string');
  });

  it('should return true if the string can be created from characters from the array', function() {
    const normalCases = [
      {input: [['a', 'b', 'c'], 'abc'], output: true},
      {input: [['a', 'b', 'c', 'd'], 'abc'], output: true}
    ];

    normalCases.forEach(function(normalCase) {
      expect(makesTheSentence(...normalCase.input)).to.equal(normalCase.output);
    });
  });

  it('should return true if the string can be created from characters from the array with duplicate characters in string', function() {
    const testCases = [
      {input: [['a', 'b', 'c', 'd', 'd'], 'abcdd'], output: true}
    ];

    testCases.forEach(function(testCase) {
      expect(makesTheSentence(...testCase.input)).to.equal(testCase.output);
    });
  });

  it('should return false if string cannot be created from characters from array, using each array character once', function() {
    const testCases = [
      {input: [['a', 'b', 'c'], 'abcd'], output: false},
      {input: [['a', 'b', 'c'], 'abcc'], output: false}
    ];

    testCases.forEach(function(testCase) {
      expect(makesTheSentence(...testCase.input)).to.equal(testCase.output);
    })
  });
});
