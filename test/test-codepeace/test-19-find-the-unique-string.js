'use strict';

const chai = require('chai');
const expect = chai.expect;

const findUniq = require('../../codepeace/19-find-the-unique-string');

describe('findUniq', function() {
  // should return a string
  it('should return a string', function() {
    expect(findUniq(['unique item', 'asdf', 'qwer'])).to.be.a('string');
  });

  // should return an error if the input is not an array
  it('should return an error if the input is not an array', function() {
    expect(findUniq(1234)).to.be.an('error');
  });

  it('should not return an error if input is an array', function() {
    expect(findUniq(['1', '2', '3'])).to.not.be.an('error');
  });

  // should return an error if any of the items in the array is not a string
  it('should return an error if any of the array items is not a string', function() {
    expect(findUniq(['a string', 'a-okay', 1234])).to.be.an('error');
  });

  // should return an error if array inputted does not have 3 items
  // it('should return an error if inputted array does not have exactly 3 items', function() {
  //
  // });

  // should convert upper and lower casing to find string with unique characters


});
