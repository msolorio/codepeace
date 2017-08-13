'use strict';

const chai = require('chai');
const expect = chai.expect;

const { checkForPalindrome } = require('../../freecodecamp/2-check-for-palindromes');

describe('checkForPalindrome', function() {

  it('should return false if input is a falsy value', function() {
    expect(checkForPalindrome()).to.be.false;
  });

  it('should return a boolean', function() {
    expect(checkForPalindrome('eye')).to.be.a('boolean');
  });

  it('should return true given the string "eye"', function() {
    expect(checkForPalindrome('eye')).to.be.true;
  });

  it('should return true given the string "_eye"', function() {
    expect(checkForPalindrome('_eye')).to.be.true;
  });

  it('should return true given the string "race car"', function() {
    expect(checkForPalindrome('race car')).to.be.true;
  });

  it('should return true even if letter casing does not match', function() {
    expect(checkForPalindrome('eyE')).to.be.true;
  });

  it('should remove all non-alphanumeric characters before comparing', function() {
    expect(checkForPalindrome('A man, a plan, a canal. Panama')).to.be.true;
  });

  it('should return false when input is not a palindrome', function() {
    expect(checkForPalindrome('ukulele')).to.be.false;
  });

  it('should return true given an input of all non-alphanumeric characters', function() {
    expect(checkForPalindrome('0_0 (: /-\ :) 0-0')).to.be.true;
  });

});