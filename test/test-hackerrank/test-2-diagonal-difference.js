'use strict';

const chai = require('chai');
const expect = chai.expect;

const diagonalDifference = require('../../hackerrank/2-diagonal-difference');

describe('diagonalDifference', function() {
  it('should return an error if grid length does not match grid height', function() {
    const testGrid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9, 10]
    ];

    expect(diagonalDifference(testGrid)).to.be.an('error');
  });

  it('should return an error if not all grid values are numbers', function() {
    const testGrid = [
      [5, 2, 'Y'],
      [4, 9, 6],
      [5, 8, 5]
    ];

    expect(diagonalDifference(testGrid)).to.be.an('error');
  });

  it('should return a number', function() {
    const testGrid = [
      [1, 2, 0],
      [4, 5, 6],
      [7, 8, 9]
    ];

    expect(diagonalDifference(testGrid)).to.be.a('number');
  });

  it('should return the correct value if the first diagonal is greater', function() {
    const testGrid = [
      [9, 2, 0],
      [4, 9, 6],
      [0, 8, 9]
    ];

    expect(diagonalDifference(testGrid)).to.equal(18);
  });

  it('should return the correct value if the second diagonal is greater', function() {
    const testGrid = [
      [0, 2, 9],
      [4, 9, 6],
      [9, 8, 0]
    ];

    expect(diagonalDifference(testGrid)).to.equal(18);
  });

  it('should return zero if both diagonals are of equal sums', function() {
    const testGrid = [
      [5, 2, 5],
      [4, 9, 6],
      [5, 8, 5]
    ];

    expect(diagonalDifference(testGrid)).to.equal(0);
  });
});
