'use strict';

const chai = require('chai');
const expect = chai.expect;

const { reverseString } = require('../../freecodecamp/1-reverse-a-string');

describe('fcc1 - reverseString', function() {

  it('should return "string"', function() {
    expect(reverseString('some text')).to.be.a('string');
  });

  it('should return a reversed version of the original string', function() {
    expect(reverseString('parrots')).to.equal('storrap');
  });

  it('should reverse a string with some capital letters', function() {
    expect(reverseString('HoWdy')).to.equal('ydWoH');
  });

  it('should reverse a string with spaces', function() {
    expect(reverseString('this is a string')).to.equal('gnirts a si siht');
  });

});
