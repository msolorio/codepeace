'use strict';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const findLongestWordInString = require('../../freecodecamp/3-find-the-longest-word-in-a-string');

describe('findLongestWordInString', function() {

  it('should return a number', function() {
    expect(findLongestWordInString('this is a string')).to.be.a('number');
  });

  it('should return the number 6 when passed in "this is a string"', function() {
    expect(findLongestWordInString('this is a string')).to.equal(6);
  });

  it('should return zero if input is an empty string', function() {
    expect(findLongestWordInString('')).to.equal(0);
  });

  it('should return a zero if input is a string with no words', function() {
    expect(findLongestWordInString(' ')).to.equal(0);
  });

  it('should output length of word when input is a single word', function() {
    expect(findLongestWordInString('jelly')).to.equal(5);
  });

  it('should output 1 when length of longest word is 1 character', function() {
    expect(findLongestWordInString('a e i o u')).to.equal(1);
  });

  it('should output proper length when longest word is exceptionally long', function () {
    expect(findLongestWordInString('my favorite thing is asdfjklasqwerqwerqwerhhjkhjl')).to.equal(28);
  });

  it('should output an error if input is a number', function() {
    expect(findLongestWordInString(58)).to.be.an('error');
  });

  it('should output an error if input is a boolean', function() {
    expect(findLongestWordInString(true)).to.be.an('error');
  });

  it('should include non-alphanumeric characters when considering length', function() {
    expect(findLongestWordInString('and the word is...')).to.equal(5);
  });
});
