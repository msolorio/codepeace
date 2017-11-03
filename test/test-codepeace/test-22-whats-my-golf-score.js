'use strict';

const chai = require('chai');
const expect = chai.expect;

const golfScoreCalculator = require('../../codepeace/22-whats-my-golf-score');

describe('cp22 - golfScoreCalculator', function() {
  it('should return an error if both inputs are not strings', function() {
    expect(golfScoreCalculator(1234, 1244)).to.be.an('error');
    expect(golfScoreCalculator(1234, 1244).message).to.equal('both inputs must be strings');
  });

  it('should return an error if both inputs are not the same length', function() {
    expect(golfScoreCalculator('1234', '123')).to.be.an('error');
    expect(golfScoreCalculator('1234', '123').message).to.equal('both inputs must be the same length');
  });

  it('should return an error if both inputs are not made of only numeric values', function() {
    expect(golfScoreCalculator('12a4', '1234')).to.be.an('error');
    expect(golfScoreCalculator('12a4', '1234').message).to.equal('all characters in inputs must be numeric');
  });


  it('should return a number', function() {
    expect(golfScoreCalculator('1234', '1234')).to.be.a('number');
  });

  it('should return the correct golf score given valid inputs', function() {
    const normalCases = [
      {input: ['222', '333'], output: 3},
      {input: ['444', '333'], output: -3},
      {input: ['453454444344544443', '354445334534445344'], output: -1}
    ];

    normalCases.forEach(function(normalCase) {
      expect(golfScoreCalculator(...normalCase.input)).to.equal(normalCase.output);
    });
  });
});
