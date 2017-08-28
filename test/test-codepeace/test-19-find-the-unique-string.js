'use strict';

const chai = require('chai');
const expect = chai.expect;

const findUniq = require('../../codepeace/19-find-the-unique-string');

describe('findUniq', function() {
  // should return a string
  it('should return a string', function() {
    expect(findUniq(['unique item', 'asdf', 'qwer', 'another'])).to.be.a('string');
  });

  it('should return the string with unique characters', function() {
    expect(findUniq(['aab', 'aba', 'aac', 'bab'])).to.equal('aac');
  })

  it('should return the first string with unique characters if there are two strings with unique characters', function() {
    expect(findUniq(['aab', 'aba', 'aac', 'bad'])).to.equal('aac');
  })

  // should return an error if the input is not an array
  it('should return an error if the input is not an array', function() {
    expect(findUniq(1234)).to.be.an('error');
  });

  it('should not return an error if input is an array', function() {
    expect(findUniq(['1', '2', '3', '4'])).to.not.be.an('error');
  });

  // should return an error if any of the items in the array is not a string
  it('should return an error if any of the array items is not a string', function() {
    expect(findUniq(['a string', 'a-okay', 1234, 'eloquent verbose words'])).to.be.an('error');
  });

  // should return an error if array inputted does not have 3 items
  it('should return an error if inputted array does not have 4 or more items', function() {
    expect(findUniq(['one', 'two', 'three'])).to.be.an('error');
  });

  // should convert upper and lower casing to find string with unique characters
  it('should convert upper and lower casing to find string with unique characters', function() {
    expect(findUniq(['one', 'ONE', 'too', 'toe', 'ggg'])).to.equal('ggg');
  });

  // should remove spacing when searching for unique characters
  it('should remove spacing when searching for unique characters', function() {
    expect(findUniq(['one', 'on e', 'two', 'twodozen'])).to.equal('twodozen');
  });

});
