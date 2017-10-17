'use strict';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const findAll = require('../../freecodecamp/4-sum-all-numbers-in-range');

describe('fcc4 - sumAll', function() {
  it('should return a number', function() {
    expect(findAll([1, 3])).to.be.a('number');
  });

  it('should return correct value given inputs', function() {
    const testCases = [
      {input: [1, 3], output: 6},
      {input: [1, 5], output: 15},
      {input: [-3, -1], output: -6},
      {input: [-3, 3], output: 0}
    ];

    testCases.forEach((testCase) => {
      expect(findAll(testCase.input)).to.equal(testCase.output);
    });
  });

  it('should return an error if input is not an array', function() {
    expect(findAll('asdf')).to.be.an('error');
    expect(findAll('asdf').message).to.equal('input must be an array');
  });

  it('should return an error if input contains items other than numbers', function() {
    expect(findAll([12, 'asdf'])).to.be.an('error');
    expect(findAll([12, 'asdf']).message).to.equal('input array must contain only numbers');
  });
});
